import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer NQ.Ubst0pjK0n2KR6UD8BKWDLTnMP9pV2-FsASiAEAqXipya727wvwwFMlLf4jy',
  },
});
