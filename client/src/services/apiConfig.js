import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://dynamic-fitness-api.herokuapp.com' : 'http://localhost:3000';
export const api = axios.create({
  baseURL: baseUrl
});