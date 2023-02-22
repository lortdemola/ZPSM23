/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
import Conn from './navigation/CONN';
import Colors from './constants/Colors';
import BTabNav from './navigation/BTabNav';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

 
  const stack = createStackNavigator();
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
      
      <stack.Screen name="Devices" component={BTabNav}  options={{title: "WhatsApp",
      headerRight:()=>(
        <View style={{flexDirection:'row',width:60,justifyContent:'space-between',marginRight:10}}>
          <Icon name="search" size={22} color={Colors.light.backGround} />
          <Icon name="list-ul" size={22} color={Colors.light.backGround} />
        </View>
      ),
      }} />
      <stack.Screen name="Connection" component={Conn}/>
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


export default App;
