import axios from 'axios';
import keys from './keys';

const baseUrl = `https://api.nytimes.com/svc/mostpopular/v2/`;
const { API_KEY } = keys;

const api = {
    getPopularArticles: (section) => axios.get(`${baseUrl}${section}/7.json?api-key=${API_KEY}`)
}

export default api;