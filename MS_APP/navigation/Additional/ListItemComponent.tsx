import moment from 'moment';
import React, {Component  ,useEffect, useState  } from 'react';
import {TouchableWithoutFeedback,StyleSheet, FlatList,SafeAreaView,View, Text,Image} from 'react-native'
import { ChatRoom } from '../../types';
import { useNavigation } from '@react-navigation/native';
export type chatlistprops={
 chatRoom: ChatRoom;
}

const ListItemComponent=( props:chatlistprops)=>{

    const{chatRoom} =props;
    const user = chatRoom.users[1];
    const navigation = useNavigation();
    const onClick = ()=>{
        navigation.navigate('Chatroom', {id:chatRoom.id,name:user.name});
    }
    return(
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftcontainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                <View style={styles.midcontainer}>
                    <Text style={styles.Usname}>{user.name}</Text>
                    <Text style={styles.LMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
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
    LMessage:{

        fontSize:16,
        color:'grey',
        
    },
    time:{

        fontSize:14,
        color:'grey',
        paddingRight:5,
    },
});
export default ListItemComponent