import React from 'react';
import { FlatList } from 'react-native';
import useCategories from '../hooks/useCategories';
import CategoryItem from '../components/CategoryItem';

export default function CategorySelectorScreen({ navigation }) {
  const categories = useCategories('egreso'); // o 'ingreso'

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <CategoryItem category={item} onPress={() => navigation.goBack()} />
      )}
    />
  );
}
