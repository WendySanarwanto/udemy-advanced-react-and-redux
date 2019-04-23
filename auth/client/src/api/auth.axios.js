import axios from 'axios';

const REACT_APP_AUTH_API_HOST_URL = process.env.REACT_APP_AUTH_API_HOST_URL || 'http://localhost:3090';
console.log(`[info]<auth.axios> REACT_APP_AUTH_API_HOST_URL: ${REACT_APP_AUTH_API_HOST_URL}`);

export default axios.create({
  baseURL: REACT_APP_AUTH_API_HOST_URL
});
