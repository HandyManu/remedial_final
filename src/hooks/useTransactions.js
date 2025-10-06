import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/transactions')
      .then(res => setTransactions(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return transactions;
}
