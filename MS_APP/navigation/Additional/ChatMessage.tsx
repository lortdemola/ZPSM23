import moment from 'moment';
import React, {Component  ,useEffect, useState  } from 'react';
import {ActivityIndicator,StyleSheet, FlatList,SafeAreaView,ScrollView,View, Text} from 'react-native'
import Colors from '../../constants/Colors';
import { Message } from '../../types';

export type ChatMessageProps = {
    message: Message;
}


const ChatMessage = (props:ChatMessageProps) =>{
    const {message} = props;
    const isMyMSG=()=>{
        return message.user.id === 'u1';
    }
    return(
        <View style={styles.container}>
            <View style={[styles.box,{
                backgroundColor: isMyMSG() ? '#dcf8c5' :'#e5e5e5',
                marginLeft:isMyMSG() ? 50 :0,
                marginRight:isMyMSG() ? 0 :50,
            }
            ]}>
                {!isMyMSG() && <Text style={styles.USname}>{message.user.name}</Text> } 
                <Text style={styles.Content}>{message.content}</Text> 
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text> 
            </View>
        </View>
           
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 10,
       
        
        
    },
    box:{
        
        borderRadius: 5,
       
        padding:10
        
        
    },
    boxI:{
        backgroundColor:'#e5e5e5',
        borderRadius: 5,
        marginRight:50,
        padding:10
        
        
    },
    USname:{
        color:Colors.light.tint,
        fontSize:11,
        marginBottom:5
    },
    Content:{
       
        fontSize:13,
        
        
    },
    time:{
        alignSelf:'flex-end',
        fontSize:10,
        
        
    },
    });
export default ChatMessage