import axios from "axios";
import { toast } from "react-toastify";
//import auth from "./authService";

// to avoid bi-directional dependencies, we  set jwt, instead of get
//axios.defaults.headers.common["x-auth-token"] = auth.getJwt();
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the erroe", error);
    toast.error("An unexpected error occurred");
  }
  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
