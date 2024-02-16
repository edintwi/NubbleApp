import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.U-qpq2svysLAVUCYJX3ynCQi9LwfWFbfC7uou2mJuuEXS9AGq2HHo8lHY3aO',
  },
});
