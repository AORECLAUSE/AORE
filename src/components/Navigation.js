import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Loading from './Loading'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
export default createAppContainer(createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Dashboard,
  },
  {
    initialRouteName: 'Loading'
  }
  ));