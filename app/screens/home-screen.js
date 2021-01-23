import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/button';
import {homeStyles} from '../styles';
import axios from 'axios';
import ListItem from '../components/list-item';
import {URL} from '../constants';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_ITEMS} from '../redux/constants';

export default function HomeScreen() {
  const [disabled, setDisabled] = useState(false);
  const state = useSelector((state) => state.addItemsReducer);
  const dispatch = useDispatch();

  // This function fetch data using axios
  const fetchData = () => {
    setDisabled(true);
    axios
      .get(URL)
      .then((res) => {
        const data = {
          data: res.data,
        };
        dispatch({type: ADD_ITEMS, payload: data});
        console.log(res.data);
        setDisabled(false);
      })
      .catch((err) => {
        console.error(err);
        setDisabled(false);
      });
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.textTitle}>Hello</Text>
      <Button title={'Fetch data'} disabled={disabled} onPress={fetchData} />
      <ListItem data={state.items} />
    </View>
  );
}
