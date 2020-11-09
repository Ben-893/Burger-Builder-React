import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-react-6669f.firebaseio.com/',
});

export default instance;
