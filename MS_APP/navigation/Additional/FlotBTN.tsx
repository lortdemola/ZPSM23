import React, {Component  ,useEffect, useState  } from 'react';
import {TouchableOpacity,ActivityIndicator,StyleSheet, FlatList,ImageBackground,View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
const FlotBTN =()=>{
    const navigation = useNavigation();
    const onPress=()=>{
        navigation.navigate('Contacts');
    }
    return(
        <View style={styles.containerBTN}>
            <TouchableOpacity onPress={onPress}>         
                <Icon name="comments" size={28} color="white"/>
            </TouchableOpacity>
        </View>
       
    )
}
const styles = StyleSheet.create({
    
    containerBTN:{
       
        backgroundColor: Colors.light.tint,
        borderRadius:50,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:20,
        right:20
    },
    
    
    });
export default FlotBTN