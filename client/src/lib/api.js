import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('av_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('av_token');
    }
    return Promise.reject(error);
  }
);

export default api;

// ─── API helpers ───────────────────────────────────────────────────────────
export const getServices = () => api.get('/services');
export const getGallery  = (params) => api.get('/gallery', { params });
export const getPartners = () => api.get('/partners');
export const getContent  = (section) => api.get(`/content/${section}`);
export const submitContact = (data) => api.post('/contact', data);
