import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TransactionTypeSelector = ({ selected, onSelect }) => {
  const types = [
    { id: 'ingreso', label: 'Ingreso', color: '#4A90E2' },
    { id: 'egreso', label: 'Gasto', color: '#FF6B6B' },
    { id: 'transferencia', label: 'Transferencia', color: '#6C757D' }
  ];

  return (
    <View style={styles.container}>
      {types.map(type => (
        <TouchableOpacity
          key={type.id}
          style={[
            styles.button,
            selected === type.id && { borderColor: type.color, borderWidth: 2 }
          ]}
          onPress={() => onSelect(type.id)}
        >
          <Text style={[
            styles.buttonText,
            selected === type.id && { color: type.color }
          ]}>
            {type.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 8, marginBottom: 24 },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
  },
  buttonText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TransactionTypeSelector;
