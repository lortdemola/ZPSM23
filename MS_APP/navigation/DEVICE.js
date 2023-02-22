import { get } from 'lodash';
import React, { useEffect, useState }  from 'react'
import {ActivityIndicator,FlatList,View, Text, TouchableOpacity,Dimensions,StyleSheet, Linking, ScrollView, Button} from 'react-native';
import Result from './CONN';

import Icon from 'react-native-vector-icons/FontAwesome';
const Device = ({ navigation }) => {
  
    return (
        <View >
          <Icon name="phone" size={30} color="#000" />
          <Icon name="rocket" size={30} color="#000" />
        </View>
    ) 
}
    

const styles = StyleSheet.create({
    container:{
     flex:1
    },
    row:{
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-around',
        alignItems:'center'
       },
    ConText:{
        display: 'flex', 
        flexDirection: 'row',
        marginTop: 10,
        color:'white',
        fontFamily:'RubikStorm-Regular'
    },
    titles:{
        fontWeight: 'bold',
        color:'white',
        fontSize:20,
        fontFamily:'RubikStorm-Regular',
        textAlign:'center'
    },titlesSX:{
        fontWeight: 'bold',
        color:'wheat',
        fontSize:15,
        fontFamily:'RubikStorm-Regular',
        textAlign:'center'
    },
    titles2:{
        color:'white',
        
        fontSize:100,
        fontFamily:'RubikStorm-Regular',
        textAlign:'center',
        
    },
    NRtext:{
        color:'white',
        fontSize:10,
    },
    testBTN:{
        margin: 10, 
        padding: 10, 
        width: '45%',
        height: 150,
        borderColor:  'white',
        borderWidth:2,
        borderRadius: 25,
        color:'white',
        elevation: 8,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    testBTN2:{
        margin: 10, 
        
        width: '45%',
        height: 150,
        borderColor:  'white',
        borderWidth:2,
        borderRadius: 25,
        color:'white',
        backgroundColor: '#5300B0',
        elevation: 8,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    
    FooterBTN:{
        
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#EB00FF',
        borderWidth: 2, 
        height:'100%',
        width:'50%',
        backgroundColor:'#5300B0',
        
    },
    FooterTEXT:{
        fontWeight: 'bold', 
        fontSize: 20, 
        marginTop: 15,
        color:'white'
    },
    
    FooterBC:{ 
        display:'flex',
        flexDirection:'row',
        borderWidth: 1, 
        justifyContent:'space-between',
        alignItems:'center',
        height:'10%',
        backgroundColor:'#5300B0'
    },

   });
export default Device
