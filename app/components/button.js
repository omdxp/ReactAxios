import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {buttonStyles} from '../styles';

export default function Button({title, onPress, disabled, style}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={style}>
      <View style={buttonStyles.container}>
        <Text style={buttonStyles.textButton}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
