import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useCategories(tipo) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/categories?tipo=${tipo}`)
      .then(res => setCategories(res.data.data))
      .catch(err => console.error(err));
  }, [tipo]);

  return categories;
}
