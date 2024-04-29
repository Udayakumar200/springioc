import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/feedback';

const api = axios.create({
  baseURL: REST_API_BASE_URL,
});

export const saveFeedback = (feedbackData) => {
  return api.post('', feedbackData);
};
