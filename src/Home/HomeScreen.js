import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { CustomHeader } from '../Menu/CustomHeader';

export default HomeScreen = (props) => 
{
  const bgSource = 'https://henrysenior.co.uk/omitf/bg.png';

  return (<ImageBackground source={{ uri: bgSource }} style={{ width: '100%', height: '100%' }}>
    <CustomHeader  navigation={props.navigation}></CustomHeader>
  </ImageBackground>);
};
