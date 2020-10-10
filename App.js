import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';



const App = createStackNavigator({
  // Login:      { screen: LoginScreen },
  Home: { screen: HomeScreen },
  // MemoCreate: { screen: MemoCreateScreen},
  // Signup:     { screen: SignupScreen },
  // Home:       { screen: MemoListScreen },
  // MemoDetail: { screen: MemoDetailScreen },
  // MemoEdit:   { screen: MemoEditScreen },
  
}, {
  defaultNavigationOptions: {
    headerBackTitle: "",
    headerTitle: 'My Rice',
    headerTintColor: '#fff',
    headerTitleStyle:{
      color: '#fff',
    },
    headerStyle:{
      backgroundColor: "#734e30",
    },
  }
});
 
export default createAppContainer(App);

