import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TransactionFormScreen from '../screens/TransactionFormScreen';
import TransactionListScreen from '../screens/TransactionListScreen';
import CategorySelectorScreen from '../screens/CategorySelectorScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NuevaTransaccion" component={TransactionFormScreen} />
      <Stack.Screen name="Transacciones" component={TransactionListScreen} />
      <Stack.Screen name="Categorias" component={CategorySelectorScreen} />
    </Stack.Navigator>
  );
}
