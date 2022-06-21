import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 1, name: 'Usuário 01', email: 'usuario01@raj.com.br' },
    }
    const response = await api.post('/validate', { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id: 1, name: 'Usuário 01', email: 'usuario01@raj.com.br' },
      token: '123456789',
    }
    const response = await api.post(' /signin', { email, password });
    return response.data;
  },
  signout: async () => {
    return { status: true }
    const response = await api.post('/signout');
    return response.data
  }
});
