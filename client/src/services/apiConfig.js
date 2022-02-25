import axios from 'axios';

const baseUrl = 'https://dynamic-fitness-api.herokuapp.com/';

export const api = axios.create({
  baseURL: baseUrl
});