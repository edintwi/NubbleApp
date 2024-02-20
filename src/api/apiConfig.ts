import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.D0otrkxAhdos9me6cjP8dRLt07ohcwRiPVOHEeazLIj1uaM_HNn4CollRyIc',
  },
});
