import axios from 'axios';

const API = axios.create({
  baseURL: 'https://products-api-0e0v.onrender.com/api',
});

export const fetchProducts = () => API.get('/products');
export const addProduct = (productData) => API.post('/products', productData);
export const login = (credentials) => API.post('/auth/login', credentials);
export const signup = (userData) => API.post('/auth/register', userData);

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export default API;