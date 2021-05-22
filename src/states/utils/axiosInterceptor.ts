import axios from 'axios';
import session from 'utilities/helpers/sessionAuth';

axios.interceptors.request.use(
  async config => {
    const token = session.getAccessToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token;
    }

    // eslint-disable-next-line no-param-reassign
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export { axios };
