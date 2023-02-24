import React, {Component  ,useEffect, useState  } from 'react';
import {ActivityIndicator,StyleSheet, FlatList,SafeAreaView,ScrollView,View, Text} from 'react-native'
import ListItemComponent from './Additional/ListItemComponent';
import FlotBTN from './Additional/FlotBTN';
import { getTodo } from './Additional/queries';

import { API, graphqlOperation,Auth } from 'aws-amplify';
import { set } from 'react-native-reanimated';

const Conn = ({ navigation }) => {
    const [chatRooms,setchatRooms] = useState([]);
    useEffect(()=>{
        const fetchChats=async()=>{
            try {
            const  userInfo = await Auth.currentAuthenticatedUser();
                
            
            const userData = await API.graphql(graphqlOperation(
            getTodo,
            {id:userInfo.attributes.sub}
            ));
            
            setchatRooms(userData.data.getTodo.chatRoomUser.items);
        
            } catch (error) {
                console.warn(error);
            }
        }
        fetchChats();
     },[]) 
    
    return (
        <View style={styles.container} >
            <FlatList 
            style={{width:'100%'}}
            data={chatRooms} 
            renderItem={({item})=> <ListItemComponent chatRoom={item.chatRoom}/>}
            keyExtractor={(item)=>item.id}
            />
           <FlotBTN/>
        </View>
    )
       
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:"center"
        
        
    },
    });
   export default Conn

//
