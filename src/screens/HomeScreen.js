import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Registrar Transacción" onPress={() => navigation.navigate('NuevaTransaccion')} />
      <Button title="Ver Transacciones" onPress={() => navigation.navigate('Transacciones')} />
    </View>
  );
}
