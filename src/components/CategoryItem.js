import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function CategoryItem({ category, onPress }) {
  const { nombre, icono, color } = category;

  return (
    <TouchableOpacity style={[styles.container, { borderColor: color }]} onPress={() => onPress(category)}>
      <Text style={styles.icon}>{icono}</Text>
      <View style={styles.info}>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={[styles.tipo, { color }]}>{category.tipo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center'
  },
  icon: {
    fontSize: 28,
    marginRight: 12
  },
  info: {
    flex: 1
  },
  nombre: {
    fontSize: 16,
    fontWeight: '600'
  },
  tipo: {
    fontSize: 12,
    fontStyle: 'italic'
  }
});
