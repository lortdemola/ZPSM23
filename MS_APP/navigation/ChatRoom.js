import React, {Component  ,useEffect, useState  } from 'react';
import {ActivityIndicator,StyleSheet, FlatList,ImageBackground,View, Text} from 'react-native'
import {useRoute} from'@react-navigation/native'
import ChatRoomsData from '../data/Chats';
import  ChatMessage  from './Additional/ChatMessage';
import galaxy from '../constants/icons/galaxy.jpg'
const ChatRoomScreen = ()=>{
    
    const route = useRoute();
    
    return(
        <ImageBackground source={galaxy} style={{height:'100%'}}>
            <FlatList 
            data={ChatRoomsData.messages}
            renderItem={({item})=><ChatMessage message={item}/>}
            inverted
            />
        </ImageBackground>
         
        
    )
}
export default ChatRoomScreen