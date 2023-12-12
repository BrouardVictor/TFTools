import axios from 'axios';

const API_URL = 'http://localhost:8000';


export const getChampion = async (name) => {
  return await axios.get(`${API_URL}/champion/${name}`);
};

export const createData = async (data) => {
  return await axios.post(`${API_URL}/champion`, data);
};

export const updateData = async (name, data) => {
  return await axios.put(`${API_URL}/champion/${name}`, data);
};

export const deleteData = async (name) => {
  return await axios.delete(`${API_URL}/champion/${name}`);
};
