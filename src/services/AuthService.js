import apiClient from "../apiClient";
const INIT_PATH = "/api/v1/auth";

const AuthService = {
  // Register a new user
  register: async (userData) => {
    return await apiClient.post(`${INIT_PATH}/register`, userData);
  },

  // Login a user
  login: async (credentials) => {
    return await apiClient.post(`${INIT_PATH}/login`, credentials);
  },

  // Get user details (example)
  getUserDetails: async (userId) => {
    return await apiClient.get(`${INIT_PATH}/users/${userId}`);
  },
};

export default AuthService;
