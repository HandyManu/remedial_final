import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const NumericKeyboard = ({ visible, onNumber, onDelete, onFinish, onClose }) => {
  const buttons = [
    ['1', '2', '3', '⌫'],
    ['4', '5', '6', '-'],
    ['7', '8', '9', '📅'],
    ['', '0', ',', 'Finalizar']
  ];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Dinero</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.close}>✕</Text>
            </TouchableOpacity>
          </View>
          {buttons.map((row, i) => (
            <View key={i} style={styles.row}>
              {row.map((btn, j) => (
                <TouchableOpacity
                  key={j}
                  style={[
                    styles.button,
                    btn === 'Finalizar' && styles.finish
                  ]}
                  onPress={() => {
                    if (btn === '⌫') onDelete();
                    else if (btn === 'Finalizar') onFinish();
                    else if (btn) onNumber(btn);
                  }}
                  disabled={!btn}
                >
                  <Text style={[
                    styles.buttonText,
                    btn === 'Finalizar' && styles.finishText
                  ]}>
                    {btn}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#2a2a2a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  close: {
    color: '#fff',
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  button: {
    flex: 1,
    aspectRatio: 2,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  finish: {
    backgroundColor: '#FF6B6B',
  },
  finishText: {
    color: '#fff',
    fontWeight: '600',
  }
});

export default NumericKeyboard;
