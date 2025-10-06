import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionItem({ transaction }) {
  const { tipo, monto, descripcion, categoria, fecha } = transaction;

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{categoria?.icono || '📁'}</Text>
      <View style={styles.details}>
        <Text style={styles.descripcion}>{descripcion || 'Sin descripción'}</Text>
        <Text style={styles.fecha}>{new Date(fecha).toLocaleDateString()}</Text>
      </View>
      <Text style={[styles.monto, tipo === 'ingreso' ? styles.ingreso : styles.egreso]}>
        {tipo === 'ingreso' ? '+' : '-'}${monto.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#ccc'
  },
  icon: {
    fontSize: 24,
    marginRight: 8
  },
  details: {
    flex: 1
  },
  descripcion: {
    fontSize: 16,
    fontWeight: '500'
  },
  fecha: {
    fontSize: 12,
    color: '#888'
  },
  monto: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  ingreso: {
    color: '#2ecc71'
  },
  egreso: {
    color: '#e74c3c'
  }
});
