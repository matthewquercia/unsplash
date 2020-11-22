import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 88ee39232608c1477a11a9734b21c760a6120b3ca3a179c21415a591688a5752',
    }
});