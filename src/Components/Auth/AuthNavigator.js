import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import MainNavigator from '../Menu/MainNavigator'

// create our app's navigation stack
export default createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    MainNavigator
  },
  {
    initialRouteName: 'Loading'
  }
)