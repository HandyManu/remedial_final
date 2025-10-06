import { API_URL } from '../constants/config';

const transactionService = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${API_URL}/transactions?${params}`);
    return response.json();
  },
  getById: async (id) => {
    const response = await fetch(`${API_URL}/transactions/${id}`);
    return response.json();
  },
  create: async (data) => {
    const response = await fetch(`${API_URL}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  update: async (id, data) => {
    const response = await fetch(`${API_URL}/transactions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  delete: async (id) => {
    const response = await fetch(`${API_URL}/transactions/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  },
  getSummary: async (filters = {}) => {
    const params = new URLSearchParams(filters);
    const response = await fetch(`${API_URL}/transactions/summary`);
    return response.json();
  }
};

export default transactionService;
