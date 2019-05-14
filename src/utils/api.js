import axios from 'axios';
import keys from './keys';

const baseUrl = `https://api.nytimes.com/svc/mostpopular/v2/`;
const { API_KEY } = keys;

const api = {
    getPopularArticles: (section, period) => axios.get(`${baseUrl}${section}/${period}.json?api-key=${API_KEY}`)
}

export default api;