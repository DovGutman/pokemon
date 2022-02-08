import axios from 'axios';
import { baseURL } from '../assets/configs/config.json';

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
