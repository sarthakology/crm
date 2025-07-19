const API_BASE_URL = 'http://localhost:8080';

const API_URLS = {

  // ------------------------ GLOBAL  ROUTE ------------------------ //
  
  
  LOGIN: `${API_BASE_URL}/login`,
  
  REQUEST_OTP: `${API_BASE_URL}/register/request-otp`,
  VERIFY_OTP: `${API_BASE_URL}/register/verify-otp`,
  SET_PASSWORD: `${API_BASE_URL}/register/set-password`,
  
  
  // ------------------------ ADMIN  ROUTE ------------------------ //
  
  CALLER_LIST: `${API_BASE_URL}/caller/list`,
  ADMIN_LIST: `${API_BASE_URL}/admin/list`,
  
  CREATE_CALLER: `${API_BASE_URL}/create/caller`,
  CREATE_ADMIN: `${API_BASE_URL}/create/admin`,



};

export default API_URLS;