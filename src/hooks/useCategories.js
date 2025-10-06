import { useState } from 'react';
import { Alert } from 'react-native';
import categoryService from '../services/categoryService';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCategories = async (tipo) => {
    setLoading(true);
    try {
      const result = await categoryService.getAll({ tipo, activa: true });
      if (result.success) setCategories(result.data);
    } catch {
      Alert.alert('Error', 'No se pudieron cargar las categorías');
    } finally {
      setLoading(false);
    }
  };

  return { categories, loading, loadCategories };
};

export default useCategories;
