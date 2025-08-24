import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API methods
export const apiService = {
  // Auth methods
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  
  register: (userData: any) => 
    api.post('/auth/register', userData),
  
  // Company methods
  getCompanies: () => 
    api.get('/companies'),
  
  getCompany: (id: string) => 
    api.get(`/companies/${id}`),
  
  createCompany: (data: any) => 
    api.post('/companies', data),
  
  updateCompany: (id: string, data: any) => 
    api.put(`/companies/${id}`, data),
  
  deleteCompany: (id: string) => 
    api.delete(`/companies/${id}`),
  
  // User methods
  getUsers: () => 
    api.get('/users'),
  
  getUser: (id: string) => 
    api.get(`/users/${id}`),
  
  createUser: (data: any) => 
    api.post('/users', data),
  
  updateUser: (id: string, data: any) => 
    api.put(`/users/${id}`, data),
  
  deleteUser: (id: string) => 
    api.delete(`/users/${id}`),
  
  // Subscription methods
  getSubscriptions: () => 
    api.get('/subscriptions'),
  
  getSubscription: (id: string) => 
    api.get(`/subscriptions/${id}`),
  
  createSubscription: (data: any) => 
    api.post('/subscriptions', data),
  
  updateSubscription: (id: string, data: any) => 
    api.put(`/subscriptions/${id}`, data),
  
  deleteSubscription: (id: string) => 
    api.delete(`/subscriptions/${id}`),
  
  cancelSubscription: (id: string, reason: string) => 
    api.post(`/subscriptions/${id}/cancel`, { reason }),
  
  renewSubscription: (id: string) => 
    api.post(`/subscriptions/${id}/renew`),
  
  // Audit methods
  getAuditLogs: () => 
    api.get('/audit'),
  
  getAuditLog: (id: string) => 
    api.get(`/audit/${id}`),
  
  exportAuditLogs: () => 
    api.get('/audit/export', { responseType: 'blob' }),
};

// Helper methods for auth token management
export const setAuthToken = (token: string) => {
  localStorage.setItem('authToken', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  localStorage.removeItem('authToken');
  delete api.defaults.headers.common['Authorization'];
};

// Export the api instance and service
export { api };
export default apiService;
