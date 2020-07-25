import Axios from "axios";
import Vue from "vue";
import HelperFunctions from "./functions";

const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1vaGFtbWFkLnNyaWVvQGdtYWlsLmNvbSIsIm5hbWVpZCI6IjVjNWJlYjhiLTUyMTctNGUzYS1hMjA0LTViZWE4YmRkYzNjZiIsImdpdmVuX25hbWUiOiJNb2hhbW1hZCIsImZhbWlseV9uYW1lIjoiU3JpZW8iLCJyb2xlIjoiTm9ybWFsVXNlciIsImh0dHA6Ly9oZWFsdGhpbnRvdWNoLm5ldC9jbGFpbXMvaW50b3VjaHBvaW50bmFtZSI6IiIsImh0dHA6Ly9oZWFsdGhpbnRvdWNoLm5ldC9jbGFpbXMvcHJvZmlsZXR5cGUiOiItMSIsIm5iZiI6MTU5NDExMjMzNCwiZXhwIjoxNTk2NTMxNTM0LCJpYXQiOjE1OTQxMTIzMzR9.LFKvMUdY4yuPpv6qmnXojSCP0WZ0DG3svginBZs1664";

// Add a request interceptor

Axios.interceptors.request.use(
  (config) => {
    // const token = accessToken;
    // config.baseURL = PROXY_URL + Vue.prototype.$api;

    // if (token) {
    //   config.headers["Authorization"] = "bearer " + token;
    // }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function(error) {
    //if the request doesnt have a status code (network error for ex)
    if (!error.response && error.request) {
      //wait for 1 second before retrying the request
      await HelperFunctions.delay(1000);
      return Axios.request(error.config);
    }

    return Promise.reject(error);
  }
);
