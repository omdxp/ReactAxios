import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {listItemStyles} from '../styles';
import Item from './item';
import ItemSeperator from './item-seperator';

export default function ListItem({data}) {
  console.log('data:', data);
  return (
    <View style={listItemStyles.container}>
      <FlatList
        data={data[0]}
        renderItem={(item) => <Item item={item.item} index={item.index} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <ItemSeperator />}
      />
    </View>
  );
}
