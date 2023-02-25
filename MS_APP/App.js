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
import Stastus from './navigation/Stastus';
import Conn from './navigation/ChatSrc';
import Colors from './constants/Colors';
import BTabNav from './navigation/BTabNav';
import ChatRoomScreen from './navigation/ChatRoom';
import Contacts from './navigation/Contacts';
import { Amplify, Auth,API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {withAuthenticator} from'aws-amplify-react-native'
import Settings from './navigation/Additional/Settings';
Amplify.configure(awsconfig);
import { getTodo } from './src/graphql/queries';
import { createTodo } from './src/graphql/mutations';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
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
    SplashScreen.hide();
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
      
      <stack.Screen name="Devices" component={BTabNav}  options={({navigation})=>({title: "NonSpace",
      headerTitleContainerStyle: { marginLeft: 0 } ,
      headerLeft:()=>(
      <View style={{width:20,marginLeft:5  }}>
          <Icon name="rocket" size={22} color={Colors.light.backGround} />
      </View>),

      headerRight:()=>(
        <View style={{flexDirection:'row',width:60,justifyContent:'space-between',marginRight:15}}>
          <Icon name="search" size={22} color={Colors.light.backGround} />
          <TouchableOpacity onPress={() => console.log(navigation.navigate('Settings'))}><Icon name="list-ul" size={22} color={Colors.light.backGround} /></TouchableOpacity>
        </View>
      ),
      })} />
      <stack.Screen name="Connection" component={Conn}/>
      <stack.Screen name="Contacts" component={Contacts}/>
      <stack.Screen name="Stastus" component={Stastus}/>
      <stack.Screen name="Settings" component={Settings}/>
      <stack.Screen name="Chatroom" component={ChatRoomScreen}options={({route})=>({
      title: route.params.name,
      headerRight:()=>(
        <View style={{flexDirection:'row',width:100,justifyContent:'space-between',paddingLeft:50}}>
          
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
