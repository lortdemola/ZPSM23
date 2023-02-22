import moment from 'moment';
import React, {Component  ,useEffect, useState  } from 'react';
import {TouchableWithoutFeedback,StyleSheet, FlatList,SafeAreaView,View, Text,Image} from 'react-native'
import { User } from '../../types';
import { useNavigation } from '@react-navigation/native';
export type chatlistprops={
 user: User;
}

const ListItemContacts=( props:chatlistprops)=>{

    const{user} =props;
    
    const navigation = useNavigation();
    const onClick = ()=>{
        //nav to chat w itch user
    }
    return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftcontainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                <View style={styles.midcontainer}>
                    <Text style={styles.Usname}>{user.name}</Text>
                    <Text style={styles.status}>{user.status}</Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        padding: 10,
        flex:1
        
    },
    midcontainer:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    leftcontainer:{
        flexDirection:'row',
    },
    avatar:{
        width:60,
        height:60,
        marginRight:10,
        borderRadius:30,
    },
    Usname:{
        fontWeight:'bold',
        fontSize:16,
    },
    status:{
        fontSize:16,
        color:'grey',
    }
    
    
});
export default ListItemContacts