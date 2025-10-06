import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ transaction }) => {
  const isIngreso = transaction.tipo === 'ingreso';
  const color = isIngreso ? '#4A90E2' : '#FF6B6B';

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.icon}>
          {transaction.categoria?.icono || '📝'}
        </Text>
        <View>
          <Text style={styles.description}>{transaction.descripcion}</Text>
          <Text style={styles.account}>Cash</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color }]}>
        {isIngreso ? '+' : '-'} ${transaction.monto.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    fontSize: 24,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 2,
  },
  account: {
    color: '#666',
    fontSize: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  }
});

export default TransactionItem;
