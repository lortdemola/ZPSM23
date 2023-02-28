import React, { useEffect, useState }  from 'react'
import {View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native';
import { Auth,API ,graphqlOperation} from 'aws-amplify';
import { getTodo } from '../src/graphql/queries';
import { updateTodo } from '../src/graphql/mutations';
import { onUpdateTodo } from '../src/graphql/subscriptions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
const Stastus = () => {
  
    const [user,setuser] = useState([]);
    const [ImgSRC,setImgSRC] = useState('');
    const [Stat,setStat] = useState('');
    useEffect(()=>{
        const fetchChats=async()=>{
            try {
            const  userInfo = await Auth.currentAuthenticatedUser();
                
            
            const userData = await API.graphql(graphqlOperation(
            getTodo,
            {id:userInfo.attributes.sub}
            ));
            setuser(userData.data.getTodo);
        
            } catch (error) {
                console.warn(error);
            } 
        }
        fetchChats();
        
     },[]) 

     const onClick = async()=>{
        if(Stat == '' && ImgSRC == ''){
         console.warn("Noting to change ¯|_( ͡° ͜ʖ ͡°)_/¯")
        }
        else if(ImgSRC == ''){
            try {
                const  userInfo = await Auth.currentAuthenticatedUser();
                    
                
                await API.graphql(graphqlOperation(
                updateTodo,
                {input: { id:userInfo.attributes.sub,status: Stat}}
                ));
            
                } catch (error) {
                    console.warn(error);
                } 
                setStat('');
       }
       else if(Stat == ''){
        try {
            const  userInfo = await Auth.currentAuthenticatedUser();
                
            
            await API.graphql(graphqlOperation(
            updateTodo,
            {input: { id:userInfo.attributes.sub,imageUri: ImgSRC}}
            ));
        
            } catch (error) {
                console.warn(error);
            } 
            setImgSRC('');
       }else{
        try {
            const  userInfo = await Auth.currentAuthenticatedUser();
                
            
            await API.graphql(graphqlOperation(
            updateTodo,
            {input: { id:userInfo.attributes.sub ,status: Stat,imageUri: ImgSRC}}
            ));
        
            } catch (error) {
                console.warn(error);
            } 
            setImgSRC('');
            setStat('');
       }
       
    }
    
    

    return (
        <ScrollView style={{height:'120%',backgroundColor:'#7745F0',paddingBottom:70}}>
        <View style={styles.container} >
            <View style={styles.containerMID}>
                <Image source={{uri: `${user.imageUri}`}} style={styles.avatar}/>
                <View>
                    <Text style={styles.textname}>{user.name}</Text>
                    <Text style={styles.textstatus}>{user.status}</Text>
                </View>
            </View>
         <View style={styles.containerFORM}>
            <View>
                <Text style={styles.textstatus}>Image sorce:</Text>
                <TextInput value={ImgSRC} onChangeText={setImgSRC} style={styles.input}></TextInput>
                <Text style={styles.textstatus}>Status:</Text>
                <TextInput value={Stat} onChangeText={setStat} style={styles.input}></TextInput>

                
            </View> 
         </View>
        </View>
        <TouchableOpacity onPress={onClick} style={styles.btn}><Text style={styles.textbtn}>CHANGE</Text></TouchableOpacity>
        </ScrollView>
    ) 
}
    

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#7745F0',
        paddingVertical:20,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    containerMID:{
        backgroundColor:'#7799f0',
        elevation:20,
        padding:20,
        borderRadius:30,
        marginBottom:40,
        height:'40%',
        width:'90%',
       flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
    },
    containerFORM:{
        
        backgroundColor:'#77baf0',
        elevation:20,
        padding:20,
        borderRadius:30,
        height:'55%',
        width:'90%',
        marginBottom:20,
       flexDirection:'row',
        
        
        
    }
    ,avatar:{
        width:100,
        height:100,
        marginRight:10,
        borderRadius:30,
    },
    textname:{
        fontSize:30,
        color:'white',
        fontWeight:'bold'
    },
    textstatus:{
        fontSize:25
    },
    textbtn:{
        fontSize:25,
        color:'white'
    },
    input:{
        backgroundColor:'white',
        borderRadius:30,
        width:'230%', 
        padding:5
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:45,
        marginHorizontal:60,
        backgroundColor:'black',
        borderRadius:30,
        width:'70%', 
        height:'10%',
    },

   });
export default Stastus
