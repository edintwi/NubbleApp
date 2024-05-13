import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.Vaxl95D7Z9dXgU6OLPMIRgUU1B_o1Z-usuCGmRc_w0IjrUaK7UayfnsSG7r3',
  },
});
