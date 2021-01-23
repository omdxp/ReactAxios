import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/button';
import {homeStyles} from '../styles';
import axios from 'axios';
import ListItem from '../components/list-item';

export default function HomeScreen() {
  const [disabled, setDisabled] = useState(false);
  const [items, setItems] = useState([]);

  // This function fetch data using axios
  const fetchData = () => {
    setDisabled(true);
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setItems(res.data);
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

      <ListItem data={items} />
    </View>
  );
}
