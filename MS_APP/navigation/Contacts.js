import React, {Component  ,useEffect, useState  } from 'react';
import {ActivityIndicator,StyleSheet, FlatList,SafeAreaView,ScrollView,View, Text} from 'react-native'
import ListItemContacts from './Additional/ListItemContacts';

import FlotBTN from './Additional/FlotBTN';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../src/graphql/queries';




const Contacts = ({ navigation }) => {
    const [Users,setusers]= useState([]);
   
    useEffect(()=>{ 
        const fetchUsers = async()=>{
          try {
            const usersData = await API.graphql(graphqlOperation(
                listTodos
  
            ))
            setusers(usersData.data.listTodos.items)
          } catch (error) {
            console.warn(e);
          }
        }
        fetchUsers();
      },[])
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
