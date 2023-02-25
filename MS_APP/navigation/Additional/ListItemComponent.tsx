import moment from 'moment';
import React, {Component  ,useEffect, useState  } from 'react';
import {TouchableWithoutFeedback,StyleSheet, FlatList,SafeAreaView,View, Text,Image} from 'react-native'
import { ChatRoom } from '../../types';
import { useNavigation } from '@react-navigation/native';

import { API, graphqlOperation,Auth } from 'aws-amplify';
export type chatlistprops={
 chatRoom: ChatRoom;
}

const ListItemComponent=( props:chatlistprops)=>{

    const{chatRoom} =props;
    const[userA,setuserA] = useState([]);
    const  userInfo =  Auth.currentAuthenticatedUser();
    useEffect(()=>{
        const fetchChats=async()=>{
            try {
            const  userInfo = await Auth.currentAuthenticatedUser();
                
            if(chatRoom.chatRoomUsers.items[0].user.id == userInfo.attributes.sub ){
                setuserA(chatRoom.chatRoomUsers.items[1].user);
               
            }else{
                setuserA(chatRoom.chatRoomUsers.items[0].user);
            }
           
            } catch (error) {
                console.warn(error);
            }
        }
        fetchChats();
     },[]) 
     const user = userA;

    const navigation = useNavigation();
    const onClick = ()=>{
        navigation.navigate('Chatroom', {id:chatRoom.id,name:user.name});
    }
    if(chatRoom.lastMessage == null){
        return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftcontainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                <View style={styles.midcontainer}>
                    <Text style={styles.Usname}>{user.name}</Text>
                   
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>)
    }
    else
    {
        return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftcontainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                <View style={styles.midcontainer}>
                    <Text style={styles.Usname}>{user.name}</Text>
                    <Text style={styles.LMessage} >
                    {chatRoom.lastMessage 
                        ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content.length < 10
                            ? `${chatRoom.lastMessage.content}`
                            : `${chatRoom.lastMessage.content.substring(0, 18)}...`}`
                        :""}</Text>
                </View>
            </View>
            <Text style={styles.time}>{ chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
        </View>
        </TouchableWithoutFeedback>
    )}
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"97%",
        justifyContent:'space-between',
        padding: 10,
        backgroundColor:'white',
        margin:6,
        borderRadius:20,
        flex:1,
        
    },
    midcontainer:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    leftcontainer:{
        flexDirection:'row',
    },
    avatar:{
        width:60,
        height:60,
        marginRight:10,
        borderRadius:30,
    },
    Usname:{
        fontWeight:'bold',
        fontSize:16,
    },
    LMessage:{

        fontSize:16,
        color:'grey',
     
        
    },
    time:{

        fontSize:14,
        color:'grey',
        paddingRight:5,
    },
});
export default ListItemComponent