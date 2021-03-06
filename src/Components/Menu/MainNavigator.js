import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import HomeScreen from "../Home/HomeScreen";
import GigsScreen from "../Gigs/GigsScreen";

export const NavigatorConfig = {
  drawerType: 'front',//'back','slide'
  intialRouteName: 'Gigs',
  contentOptions: {
    activeTintColor: '#EDC068',
    inactiveTintColor : 'white',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: '#000000',
};

export const MainNavigator ={
  Home: {
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (<Ionicons name="md-home" style={{ color: tintColor }} />),
      drawerLabel: 'Home'
    },
    screen: HomeScreen
  },
  Gigs: {
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (<Ionicons name="md-calendar" style={{ color: tintColor }} />),
      drawerLabel: 'Gigs'
    },
    screen: GigsScreen
  },
};