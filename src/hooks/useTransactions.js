import { useState } from 'react';
import { Alert } from 'react-native';
import transactionService from '../services/transactionService';

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState({ totalIngresos: 0, totalEgresos: 0, balance: 0 });

  const loadTransactions = async (filters) => {
    setLoading(true);
    try {
      const result = await transactionService.getAll(filters);
      if (result.success) setTransactions(result.data);
    } catch {
      Alert.alert('Error', 'No se pudieron cargar las transacciones');
    } finally {
      setLoading(false);
    }
  };

  const loadSummary = async () => {
    try {
      const result = await transactionService.getSummary();
      if (result.success) setSummary(result.data);
    } catch (error) {
      console.error('Error loading summary:', error);
    }
  };

  const createTransaction = async (data) => {
    try {
      const result = await transactionService.create(data);
      if (result.success) {
        loadTransactions();
        loadSummary();
        return true;
      }
      return false;
    } catch {
      Alert.alert('Error', 'No se pudo crear la transacción');
      return false;
    }
  };

  return { transactions, loading, summary, loadTransactions, loadSummary, createTransaction };
};

export default useTransactions;
