
import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const CustomHeader = ({navigation}) => (
    <View>
        <Ionicons 
        name="md-menu"
        size={40}
        color="#EDC068"
        style={{marginLeft:5}}
         onPress={() => navigation.openDrawer()}
        />
    </View>
);