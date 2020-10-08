import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UjafG9oraAJTUN7GGW1bx9t_ajlnJGAXqW52O-zYENo'
    }
});