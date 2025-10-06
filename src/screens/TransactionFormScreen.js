import React, { useEffect, useState } from 'react';
import {
  View, Text, SafeAreaView, StatusBar, ScrollView,
  TouchableOpacity, TextInput, Alert
} from 'react-native';
import useTransactions from '../hooks/useTransactions';
import useCategories from '../hooks/useCategories';
import TransactionTypeSelector from '../components/TransactionTypeSelector';
import CategorySelector from '../components/CategorySelector';
import NumericKeyboard from '../components/NumericKeyboard';
import styles from '../styles/styles';

const TransactionFormScreen = ({ goBack }) => {
  const { createTransaction } = useTransactions();
  const { categories, loadCategories } = useCategories();

  const [formData, setFormData] = useState({
    tipo: 'egreso',
    monto: '',
    descripcion: '',
    categoria: null,
    fecha: new Date(),
    notas: ''
  });
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  useEffect(() => {
    loadCategories(formData.tipo);
  }, [formData.tipo]);

  const handleSave = async () => {
    if (!formData.monto || !formData.categoria) {
      Alert.alert('Error', 'Complete todos los campos requeridos');
      return;
    }
    const success = await createTransaction({
      tipo: formData.tipo,
      monto: parseFloat(formData.monto),
      descripcion: formData.descripcion || 'Sin descripción',
      categoria: formData.categoria._id,
      fecha: formData.fecha,
      notas: formData.notas
    });
    if (success) {
      goBack();
      setFormData({
        tipo: 'egreso',
        monto: '',
        descripcion: '',
        categoria: null,
        fecha: new Date(),
        notas: ''
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {formData.tipo === 'ingreso' ? 'Ingreso' : 'Gasto'}
        </Text>
        <Text style={styles.headerIcon}>⭐</Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <TransactionTypeSelector
          selected={formData.tipo}
          onSelect={tipo => setFormData({ ...formData, tipo, categoria: null })}
        />

        {/* Fecha */}
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Fecha</Text>
          <Text style={styles.formValue}>
            {formData.fecha.toLocaleDateString('es', {
              day: '2-digit', month: '2-digit', year: '2-digit', weekday: 'short'
            })} {formData.fecha.toLocaleTimeString('es', {
              hour: '2-digit', minute: '2-digit', hour12: true
            })}
          </Text>
          <Text style={styles.repeatIcon}>🔄</Text>
        </View>

        {/* Monto */}
        <TouchableOpacity
          style={styles.formRow}
          onPress={() => setShowKeyboard(true)}
        >
          <Text style={styles.formLabel}>Importe</Text>
          <Text style={styles.formValueLarge}>
            $ {formData.monto || '0'}
          </Text>
        </TouchableOpacity>

        {/* Categoría */}
        <TouchableOpacity
          style={styles.formRow}
          onPress={() => setShowCategoryModal(true)}
        >
          <Text style={styles.formLabel}>Categoría</Text>
          <View style={styles.categoryDisplay}>
            {formData.categoria && (
              <>
                <Text style={styles.categoryIconSmall}>{formData.categoria.icono}</Text>
                <Text style={styles.formValue}>{formData.categoria.nombre}</Text>
              </>
            )}
          </View>
        </TouchableOpacity>

        {/* Cuenta (solo visual) */}
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Cuenta</Text>
          <Text style={styles.formValue}>Cash</Text>
        </View>

        {/* Nota / Descripción */}
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Nota</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Descripción"
            placeholderTextColor="#666"
            value={formData.descripcion}
            onChangeText={text => setFormData({ ...formData, descripcion: text })}
            multiline
          />
          <TouchableOpacity style={styles.cameraButton}>
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.formActions}>
        <TouchableOpacity
          style={[styles.saveButton, { backgroundColor: formData.tipo === 'ingreso' ? '#4A90E2' : '#FF6B6B' }]}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleSave}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <CategorySelector
        visible={showCategoryModal}
        categories={categories}
        onSelect={cat => setFormData({ ...formData, categoria: cat })}
        onClose={() => setShowCategoryModal(false)}
      />
      <NumericKeyboard
        visible={showKeyboard}
        onNumber={num => setFormData({ ...formData, monto: formData.monto + num })}
        onDelete={() => setFormData({ ...formData, monto: formData.monto.slice(0, -1) })}
        onFinish={() => setShowKeyboard(false)}
        onClose={() => setShowKeyboard(false)}
      />
    </SafeAreaView>
  );
};

export default TransactionFormScreen;
