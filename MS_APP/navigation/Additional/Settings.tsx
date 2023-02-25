import React, {Component  ,useEffect, useState  } from 'react';
import {TouchableOpacity,ActivityIndicator,StyleSheet, FlatList,ImageBackground,View, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Colors from '../../constants/Colors';
import { Auth } from 'aws-amplify';
import galaxy from '../../constants/icons/galaxy.jpg'
const Settings =()=>{
    
    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    return(
        <ImageBackground source={galaxy}   style={styles.container}>
           
           <TouchableOpacity onPress={signOut} style={styles.containerBTN}>
            <Icon name="thumbs-down" size={22} color={Colors.light.backGround} />
            <Text style={styles.textinput}>Log out</Text>
        </TouchableOpacity>
            
            
    
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'#7745F0',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    
    containerBTN:{
       
        backgroundColor: Colors.light.tint,
        borderRadius:50,
        width:100,
        height:100,
        elevation:20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    textinput:{
        color:"white",
        
        
        
    },
    
    
    });
export default Settings