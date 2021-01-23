import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {itemStyles} from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {URL} from '../constants';

export default function Item({item, index}) {
  const [disabled, setDisabled] = useState(false);
  const markAsRead = () => {
    setDisabled(true);
    console.log(index + 1);
    axios
      .patch(`${URL}/${index + 1}`, {
        completed: true,
      })
      .then((res) => {
        console.log(res.status);
        setDisabled(false);
      })
      .catch((err) => {
        console.error(err);
        setDisabled(false);
      });
  };
  return (
    <View style={itemStyles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={itemStyles.textItem}>{item.title}</Text>
        {item.completed ? (
          <Ionicons name={'checkmark-done'} size={50} color={'green'} />
        ) : (
          <TouchableOpacity onPress={markAsRead} disabled={disabled}>
            <Ionicons name={'checkmark'} size={50} color={'red'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
