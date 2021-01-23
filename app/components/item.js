import React from 'react';
import {View, Text} from 'react-native';
import {itemStyles} from '../styles';

export default function Item({item}) {
  return (
    <View style={itemStyles.container}>
      <Text style={itemStyles.textItem}>{item.title}</Text>
      <Text style={itemStyles.textItem}>
        {item.completed ? 'completed' : 'not completed'}
      </Text>
    </View>
  );
}
