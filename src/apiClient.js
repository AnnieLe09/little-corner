// src/utils/ApiClient.js
import axios from "axios";
import { API_URL } from "./config"; // Import your API URL from config

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Set timeout as needed
});

// Interceptor for handling requests
apiClient.interceptors.request.use(
  (config) => {
    // Add any common headers or authentication tokens here
    // For example, add JWT token if needed
    const token = localStorage.getItem("token"); // Or any other storage mechanism
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor for handling responses
apiClient.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response.data; // Return just the data part
  },
  (error) => {
    // Handle error responses
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("API Error:", error.response.data);
      return Promise.reject(error.response.data); // Return error response data
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
      return Promise.reject({ message: "No response received from server." });
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error:", error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

export default apiClient;
