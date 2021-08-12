import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const privateRequest = axios.create({
  baseURL: REACT_APP_API_URL,
});

export const publicRequest = axios.create({
  baseURL: REACT_APP_API_URL,
});
