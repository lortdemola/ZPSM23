
import React, { useEffect, useState  } from 'react';
import {View, Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Stastus from './Stastus';
import Conn from './ChatSrc';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const Tab = createMaterialTopTabNavigator();

const BTabNav = () => {
    const ColorScheme =useColorScheme();
    return(
    <Tab.Navigator 
    tabBarOptions={{
        activeTintColor:Colors[ColorScheme].backGround, 
        style:{
            backgroundColor: Colors[ColorScheme].tint,

        },
        indicatorStyle:{
            backgroundColor: Colors[ColorScheme].backGround,
            height:4
        },
        labelStyle:{

            fontWeight: 'bold',   
        }
        
    }}
    >
        
        <Tab.Screen name="Chats" component={Conn}/>
        <Tab.Screen name="Status" component={Stastus}  />
        
        
    </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
        width:0,
        height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5,

    
}
});
export default BTabNav