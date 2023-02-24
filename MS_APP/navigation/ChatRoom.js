import React, {Component  ,useEffect, useState  } from 'react';
import {ActivityIndicator,StyleSheet, FlatList,ImageBackground,View, Text} from 'react-native'
import {useRoute} from'@react-navigation/native'
import  ChatMessage  from './Additional/ChatMessage';
import galaxy from '../constants/icons/galaxy.jpg'
import InputBox from './Additional/InputBox';
import { API, graphqlOperation,Auth } from 'aws-amplify';
import { messagesByChatRoomIDAndCreatedAt } from '../src/graphql/queries';



const ChatRoomScreen = ()=>{
    
    const route = useRoute();
    const [messages,setmessages] = useState([]);
    useEffect(() => {
        const fetchUser=async()=>{
          
          const messagesData = await API.graphql(graphqlOperation(
            messagesByChatRoomIDAndCreatedAt,
            {chatRoomID:route.params.id,
                sortDirection:'DESC'
                }
            ));
            
            setmessages(messagesData.data.messagesByChatRoomIDAndCreatedAt.items);
            
      }
      fetchUser();
      }, [])
    return(
        <ImageBackground source={galaxy} style={{height:'100%'}}>
            <FlatList 
            data={messages}
            renderItem={({item})=><ChatMessage message={item}/>}
            inverted
            />
            <InputBox chatRoomID={route.params.id}/>
        </ImageBackground>
         
        
    )
}
export default ChatRoomScreen