import React, { useState } from 'react';
import TransactionListScreen from './src/screens/TrasactionListScreen';
import TransactionFormScreen from './src/screens/TransactionFormScreen';

const App = () => {
  const [screen, setScreen] = useState('list');

  return screen === 'list' 
    ? <TransactionListScreen goToForm={() => setScreen('form')} />
    : <TransactionFormScreen goBack={() => setScreen('list')} />;
};

export default App;
