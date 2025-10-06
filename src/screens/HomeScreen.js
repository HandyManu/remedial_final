// src/screens/HomeScreen.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import useTransactions from '../hooks/useTransactions';
import TransactionList from '../components/TransactionList';

const HomeScreen = () => {
  const { transactions, loading, loadTransactions } = useTransactions();

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <View>
      {loading ? <ActivityIndicator /> : <TransactionList transactions={transactions} />}
    </View>
  );
};

export default HomeScreen;