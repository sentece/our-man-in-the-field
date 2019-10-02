import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import HomeScreen from "../Home/HomeScreen";
import GigsScreen from "../Gigs/GigsScreen";

export const MainNavigator ={
  Home: {
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (<Ionicons name="md-home" style={{ color: tintColor }} />),
      drawerLabel: "Home"
    },
    screen: HomeScreen
  },
  Gigs: {
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (<Ionicons name="md-settings" style={{ color: tintColor }} />),
      drawerLabel: "Gigs"
    },
    screen: GigsScreen
  },
};
