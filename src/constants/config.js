//export const API_URL = 'http://localhost:4000/api'; // Cambia esto a tu URL del backend
export const API_URL = 'http://10.0.2.2:4000/api'; // Cambia esto a tu URL del backend

// Función para verificar conexión
export const checkConnection = async () => {
    try {
      const response = await fetch(`${API_URL}/categories`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      return response.ok;
    } catch (error) {
      console.error('Error de conexión:', error);
      return false;
    }
  };