import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

// Request Interceptors

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

// Response Interceptors

// axiosClient.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     try {
//         const {response} = error;
//         if (response.status === 401){                // ------------- error comes from here
//             localStorage.removeItem('ACCESS_TOKEN')
//         }
//     } catch(e){
//         console.error(e);
//     }
    
//     throw error;
// })

axiosClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { response } = error || {}; // Handle undefined response object
      if (response && response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN');
      }
      throw error;
    }
  );

export default axiosClient;