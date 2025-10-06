// src/components/TransactionList.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const TransactionList = ({ transactions }) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.description}</Text>
          <Text>{item.amount}</Text>
        </View>
      )}
    />
  );
};

export default TransactionList;