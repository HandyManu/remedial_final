import React from 'react';
import { FlatList } from 'react-native';
import useTransactions from '../hooks/useTransactions';
import TransactionItem from '../components/TransactionItem';

export default function TransactionListScreen() {
  const transactions = useTransactions();

  return (
    <FlatList
      data={transactions}
      keyExtractor={item => item._id}
      renderItem={({ item }) => <TransactionItem transaction={item} />}
    />
  );
}
