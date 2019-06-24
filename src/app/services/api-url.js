import axios from 'axios'

// API Settings
const instance = axios.create({
  baseURL: env.BASE_URL,
  headers: {}
});

// API Call Types
export const API = {
  post(endpoint, formData) {
    return instance.post(endpoint, formData);
  },
  put(endpoint, formData) {
    return instance.put(endpoint, formData);
  },
  get(endpoint) {
    return instance.get(endpoint);
  },
  delete(endpoint) {
    return instance.delete(endpoint);
  }
}

// API Endpoints
export const ENDPOINTS = {
}