import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import NumericPad from '../components/NumericPad';
import AccountSelector from '../components/AccountSelector';
import Tabs from '../components/Tabs';

export default function TransactionFormScreen({ navigation }) {
  const [tipo, setTipo] = useState('egreso');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [notas, setNotas] = useState('');

  const handleSubmit = () => {
    // POST a la API
  };

  return (
    <View>
      <Tabs tipo={tipo} setTipo={setTipo} />
      <NumericPad value={monto} setValue={setMonto} />
      <Button title="Seleccionar Categoría" onPress={() => navigation.navigate('Categorias')} />
      <TextInput placeholder="Descripción" value={descripcion} onChangeText={setDescripcion} />
      <TextInput placeholder="Notas" value={notas} onChangeText={setNotas} />
      <AccountSelector />
      <Button title="Guardar" onPress={handleSubmit} />
    </View>
  );
}
