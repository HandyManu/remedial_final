import {View , Button} from "react-native"

export default function Tabs({ tipo, setTipo  }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button title="Ingreso" onPress={() => setTipo('ingreso')} />
      <Button title="Gasto" onPress={() => setTipo('egreso')} />
      <Button title="Transferencia" onPress={() => setTipo('transferencia')} />
    </View>
  );
}
