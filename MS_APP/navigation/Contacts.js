import React, {Component  ,useEffect, useState  } from 'react';
import {ActivityIndicator,StyleSheet, FlatList,SafeAreaView,ScrollView,View, Text} from 'react-native'
import ListItemContacts from './Additional/ListItemContacts';
import Users from '../data/Users';
import FlotBTN from './Additional/FlotBTN';




const Contacts = ({ navigation }) => {
   
    
    return (
        <View style={styles.container} >
            <FlatList 
            style={{width:'100%'}}
            data={Users} 
            renderItem={({item})=> <ListItemContacts user={item}/>}
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
   export default Contacts

//
