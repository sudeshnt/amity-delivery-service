import axios from 'axios';

export const baseURL = process.env.REACT_APP_API_BASE_URL;
export const secretKey = process.env.REACT_APP_API_SECRET_KEY;

const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {'secret-key': secretKey ?? ''}
});

export const fetchGraphData = async () => {
  const graph = await instance.get('6247d05b1a1b610f084a2c40/3')
  return graph?.data
};