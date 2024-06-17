import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer Mg.cUrnm7BOzy0cr8v78sm83qh103W7K-fqPlBDqhR39Z5r-U2wNXkIwlt4m5Ix',
  },
});
