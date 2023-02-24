import moment from 'moment';
import React, {Component  ,useEffect, useState  } from 'react';
import {TouchableWithoutFeedback,StyleSheet, FlatList,SafeAreaView,View, Text,Image} from 'react-native'
import { User } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation,Auth } from 'aws-amplify';
import { createChatRoom,createChatRoomUser } from '../../src/graphql/mutations';
import { getChatRoom} from '../../src/graphql/queries';
import { getTodo } from './queries';
export type chatlistprops={
 user: User;
}

const ListItemContacts=( props:chatlistprops)=>{

    const [ChatusersID,setChatusersID] = useState([]);
    const [chatRooms,setchatRooms] = useState([]);
    const [t,sett] = useState(false);
    const{user} =props;
    useEffect(()=>{
        const ifExist=async()=>{
            try {
                const  userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
                
            if(userInfo){
            const userData = await API.graphql(graphqlOperation(
            getTodo,
            {id:userInfo.attributes.sub}
            ));
            
            if(userData.data.getTodo){
                setchatRooms(userData.data.getTodo.chatRoomUser.items);
                
            }
            
            }
            } catch (error) {
                console.warn(error);
            }
        }
        ifExist();
     },[]) 
    
    const navigation = useNavigation();
    const onClick = async ()=>{
    
        var tr = false;
        try {
            
            for (let index = 0; index < chatRooms.length; index++) {
                const element = chatRooms[index].chatRoom.chatRoomUsers.items;
                for (let ind = 0; ind< element.length; ind++) {
                    if(user.id == element[ind].user.id){
                        tr = true;
                    }
                }
                
                
            }
            
        
            
                
            
        
        if(!tr)
        {
            const newchatRoomData = await API.graphql(
                graphqlOperation(
                    createChatRoom,{
                        input:{}
                    }
            ));
            if(!newchatRoomData.data){
                console.warn("fail to crate chat room")
                return;
            }
            const newchatRoom = newchatRoomData.data.createChatRoom;
            const newchatRoomUser = await API.graphql(
                graphqlOperation(
                    createChatRoomUser,{input:{
                        userID:user.id,
                        chatRoomID:newchatRoom.id
                    }}
            ));
            const userinfo = await Auth.currentAuthenticatedUser();
            console.log(userinfo.attributes.sub);
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser,{input:{
                        userID:userinfo.attributes.sub,
                        chatRoomID:newchatRoom.id
                    }}
            ));
            navigation.navigate('Chatroom', {id:newchatRoom.id,name:user.name});
        }
        } catch (error) {
            console.warn(error);
        }
    }
        
    

    return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftcontainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                <View style={styles.midcontainer}>
                    <Text style={styles.Usname}>{user.name}</Text>
                    <Text style={styles.status}>{user.status}</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        padding: 10,
        flex:1
        
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
    status:{
        fontSize:16,
        color:'grey',
    }
    
    
});
export default ListItemContacts