import axios from 'axios';
/**
 * Submits our HTTP requests do send/receive things on the server side.
 */
export const historyFetch = () => {
    return axios.get('allhistory');
};

export const store = (data) => {
    return axios.post('todo', data)
};