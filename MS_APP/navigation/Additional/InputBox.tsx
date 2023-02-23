import React, {Component  ,useEffect, useState  } from 'react';
import {TouchableOpacity,ActivityIndicator,StyleSheet, FlatList,ImageBackground,View, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Colors from '../../constants/Colors';

const InputBox =()=>{

    const [message,setmessage] = useState('');
    const onMicPress=()=>{
        console.warn('onMicPress');
    }
    const onSendPress=()=>{
        setmessage('');
    }
    const onPress = ()=>{
        if(!message){
            onMicPress();
        }else{
            onSendPress();
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerIN}>
            <Icon name="smile-o" size={24} color="grey"/>
            <TextInput style={styles.textinput} 
            multiline 
            numberOfLines={1}
            value={message}
            placeholder={"Type a message"}
            onChangeText={setmessage}/>
            <Icon3 name="attachment" size={24} color="grey" style={styles.icon}/>
            {!message &&<Icon name="camera" size={24} color="grey" style={styles.icon}/>}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.containerBTN}>
                    {!message ?<Icon name="microphone" size={28} color="white"/>:<Icon2 name="send" size={24} color="white"/>}
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
        backgroundColor: 'white',
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
        flex:1,
        marginHorizontal:10,
        
    },
    icon:{
        marginHorizontal:5, 
    }
    
    });
export default InputBox