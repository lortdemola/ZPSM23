/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  
} from 'react-native';

import {
  
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import Device from './navigation/DEVICE';
import Conn from './navigation/ChatSrc';
import Colors from './constants/Colors';
import BTabNav from './navigation/BTabNav';
import ChatRoomScreen from './navigation/ChatRoom';
import Contacts from './navigation/Contacts';
import { Amplify, Auth,API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {withAuthenticator} from'aws-amplify-react-native'
Amplify.configure(awsconfig);
import { getTodo } from './src/graphql/queries';
import { createTodo } from './src/graphql/mutations';
const randomIMG =[
  'https://loremflickr.com/320/240/dog',
  'https://loremflickr.com/320/240/brazil,rio',
  'https://loremflickr.com/320/240'
]
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

 const getrandomIMG =()=>{
  return randomIMG[Math.floor(Math.random()* randomIMG.length)];

 }
  const stack = createStackNavigator();

  useEffect(()=>{ 
    const fetchUser = async()=>{
      
       const  userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
       
       if(userInfo){
        const userData = await API.graphql(graphqlOperation(
          getTodo,
          {id:userInfo.attributes.sub}
          ));
          if(userData.data.getTodo){
            return;
          }else{
            const newUser = {
              id:userInfo.attributes.sub,
              name: userInfo.username,
              imageUri: getrandomIMG(),
              status:'i am on NonSpace',
            }
            await API.graphql(
              graphqlOperation(
                createTodo,
                {input:newUser}
              )
            )
          }
          
       }
    }
    fetchUser();
  },[])



  return (
    <NavigationContainer>
    <stack.Navigator screenOptions={{
      
        headerStyle:{
          backgroundColor:Colors.light.tint,
          elevation:0,
        },
        headerTintColor:Colors.light.backGround,
        headerTitleAlign:'left',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        
      
    }}>
      
      <stack.Screen name="Devices" component={BTabNav}  options={{title: "NonSpace",
      headerRight:()=>(
        <View style={{flexDirection:'row',width:60,justifyContent:'space-between',marginRight:15}}>
          <Icon name="search" size={22} color={Colors.light.backGround} />
          <Icon name="list-ul" size={22} color={Colors.light.backGround} />
        </View>
      ),
      }} />
      <stack.Screen name="Connection" component={Conn}/>
      <stack.Screen name="Contacts" component={Contacts}/>
      <stack.Screen name="Chatroom" component={ChatRoomScreen}options={({route})=>({
      title: route.params.name,
      headerRight:()=>(
        <View style={{flexDirection:'row',width:100,justifyContent:'space-between',marginRight:15}}>
          <Icon name="video-camera" size={22} color={Colors.light.backGround} />
          <Icon name="phone" size={22} color={Colors.light.backGround} />
          <Icon name="list-ul" size={22} color={Colors.light.backGround} />
        </View>
      ),
      })}/>
    </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

});


export default withAuthenticator(App);
