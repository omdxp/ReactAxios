import React from 'react';
import {View, Text} from 'react-native';
import {homeStyles} from '../styles';

export default function HomeScreen() {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.textTitle}>Hello</Text>
    </View>
  );
}
