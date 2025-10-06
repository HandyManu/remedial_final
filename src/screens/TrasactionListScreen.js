import React, { useEffect } from 'react';
import { 
  View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity 
} from 'react-native';
import useTransactions from '../hooks/useTransactions';
import TransactionItem from '../components/TransactionItems';
import styles from '../styles/styles';

const TransactionListScreen = ({ goToForm }) => {
  const { transactions, summary, loadTransactions, loadSummary } = useTransactions();

  useEffect(() => {
    loadTransactions();
    loadSummary();
  }, []);

  const grouped = transactions.reduce((acc, t) => {
    const date = new Date(t.fecha).toLocaleDateString('es', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(t);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>oct 2025</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.headerIcon}>⭐</Text>
          <Text style={styles.headerIcon}>🔍</Text>
          <Text style={styles.headerIcon}>⚙️</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tabActive}>
          <Text style={styles.tabTextActive}>Diario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Mensual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Total</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Nota</Text>
        </TouchableOpacity>
      </View>

      {/* Summary */}
      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Ingresos</Text>
          <Text style={styles.summaryIncome}>${summary.totalIngresos.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Gastos</Text>
          <Text style={styles.summaryExpense}>${summary.totalEgresos.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Balance</Text>
          <Text style={styles.summaryBalance}>${summary.balance.toFixed(2)}</Text>
        </View>
      </View>

      {/* Transactions */}
      <ScrollView style={styles.transactionsList}>
        {Object.keys(grouped).map(date => (
          <View key={date}>
            <View style={styles.dateHeader}>
              <Text style={styles.dateDay}>{date.split(' ')[0]}</Text>
              <Text style={styles.dateMonth}>{date.split(' ').slice(1).join(' ')}</Text>
              <View style={styles.dateSummary}>
                <Text style={styles.dateSummaryIncome}>
                  ${grouped[date]
                    .filter(t => t.tipo === 'ingreso')
                    .reduce((sum, t) => sum + t.monto, 0)
                    .toFixed(2)}
                </Text>
                <Text style={styles.dateSummaryExpense}>
                  ${grouped[date]
                    .filter(t => t.tipo === 'egreso')
                    .reduce((sum, t) => sum + t.monto, 0)
                    .toFixed(2)}
                </Text>
              </View>
            </View>
            {grouped[date].map(t => (
              <TransactionItem key={t._id} transaction={t} />
            ))}
          </View>
        ))}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={goToForm}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItemActive}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navLabelActive}>Trans.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📈</Text>
          <Text style={styles.navLabel}>Estad.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💳</Text>
          <Text style={styles.navLabel}>Cuentas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⋯</Text>
          <Text style={styles.navLabel}>Más</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransactionListScreen;
