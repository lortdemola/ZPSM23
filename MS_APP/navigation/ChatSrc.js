import React, {Component  ,useEffect, useState  } from 'react';
import {ActivityIndicator,StyleSheet, FlatList,SafeAreaView,ScrollView,View, Text} from 'react-native'
import ListItemComponent from './Additional/ListItemComponent';
import chatRooms from '../data/ChatRooms';





const Conn = ({ navigation }) => {
   
    
    return (
        <View style={styles.container} >
            <FlatList 
            style={{width:'100%'}}
            data={chatRooms} 
            renderItem={({item})=> <ListItemComponent chatRoom={item}/>}
            keyExtractor={(item)=>item.id}
            />
           
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
