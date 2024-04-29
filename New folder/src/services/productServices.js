import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/product';

export const viewAllProduct = () => {
    return axios.get(REST_API_BASE_URL);
};
export const createProduct = (product) => {
    return axios.post(REST_API_BASE_URL, product);
};