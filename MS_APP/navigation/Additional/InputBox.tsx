import React, {Component  ,useEffect, useState  } from 'react';
import {TouchableOpacity,ActivityIndicator,StyleSheet, FlatList,ImageBackground,View, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Colors from '../../constants/Colors';
import { API, graphqlOperation,Auth } from 'aws-amplify';
import { createMessage } from '../../src/graphql/mutations';
import { updateChatRoom } from '../../src/graphql/mutations';
import Voice from '@react-native-voice/voice';
const InputBox =(props)=>{
    const {chatRoomID} = props;
    const [message,setmessage] = useState('');
    const [started,setstarted] = useState(false);
    const [MYuser,setMYuser] = useState(null);
    useEffect(() => {
      const fetchUser=async()=>{
        const  userInfo = await Auth.currentAuthenticatedUser();    
        setMYuser(userInfo.attributes.sub);
    }
    fetchUser();
    }, [])
    const updatechatRooom=async(messageid:string )=>{
        try {
            await API.graphql(graphqlOperation(
                updateChatRoom,
                {
                    input:{
                        id:chatRoomID,
                        lastMessageID:messageid
                    }
                }
                ));
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        return()=>{
            Voice.destroy().then(Voice.removeAllListeners);
        }
    },[])
    const onSpeechResults=(result)=>{
        setmessage(result.value[0]);
        
    }
    const onSpeechError=(error)=>{
        
        console.warn(error);
        
    }
    const onMicPressON=async()=>{
         await Voice.start('en-US');
        setstarted(true); 
        
    }
    const onMicPressOFF=async()=>{
        await Voice.stop();
        setstarted(false);
    }
    const onSendPress=async()=>{
        try{
            const createdMessageData = await API.graphql(graphqlOperation(
                createMessage,
                {
                    input:{
                        content:message,
                        userID: MYuser,
                        chatRoomID
                    }
                }
                ));
                await updatechatRooom(createdMessageData.data.createMessage.id);
                
        }catch (error){
            console.log(error);
        }
        setmessage('');
    }
    const onPress = ()=>{
        if(!message){
            if(!started){
                onMicPressON();
            }else{
                onMicPressOFF();
            }
            
        }else{
            onSendPress();
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerIN}>
            
            <TextInput style={styles.textinput} 
            multiline 
            numberOfLines={1}
            value={message}
            placeholder={"Type a message"}
            onChangeText={setmessage}/>
            
            
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.containerBTN}>
                    {!message ? started ?<Icon name="microphone" size={28} color="red"/>:<Icon name="microphone" size={28} color="white"/>:<Icon2 name="send" size={24} color="white"/>}
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        alignItems:'center',
    },
    containerIN:{
        flexDirection:'row',
        backgroundColor: Colors.light.tint,
        paddingHorizontal:10,
        borderRadius:25,
        marginRight:10,
        
        
        alignItems:'center',
        flex:1
    },
    containerBTN:{
       
        backgroundColor: Colors.light.tint,
        borderRadius:50,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        
    },
    textinput:{
        color:"white",
        flex:1,
        marginHorizontal:10,
        
    },
    icon:{
        marginHorizontal:5, 
    }
    
    });
export default InputBox