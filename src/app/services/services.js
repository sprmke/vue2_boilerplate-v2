import axios from 'axios';

import ENDPOINTS_POST from './endpoints/endpoints-post';
import ENDPOINTS_PUT from './endpoints/endpoints-put';
import ENDPOINTS_GET from './endpoints/endpoints-get';
import ENDPOINTS_DELETE from './endpoints/endpoints-delete';

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
  ...ENDPOINTS_POST,
  ...ENDPOINTS_PUT,
  ...ENDPOINTS_GET,
  ...ENDPOINTS_DELETE
}