import React from 'react';
import { Text, ImageBackground } from 'react-native';

export default HomeScreen = () => 
{
  const bgSource = 'https://henrysenior.co.uk/omitf/bg.png';

  return (<ImageBackground source={{ uri: bgSource }} style={{ width: '100%', height: '100%' }}>
    <Text>Hello</Text>
  </ImageBackground>);
};
