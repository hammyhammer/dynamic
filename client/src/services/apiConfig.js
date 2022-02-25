import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const api = axios.create({
  baseUrl: baseUrl
});