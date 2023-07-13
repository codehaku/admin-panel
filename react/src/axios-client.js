import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

// Request Interceptors

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN') // 'get() changed to getItem()' - check error debug
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

// Accept Interceptors

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {

    try {
        const {response} = error;
    
        if (response.status === 401){
            localStorage.removeItem('ACCESS_TOKEN')
        }
    } catch(e){
        console.error(e);
    }
  
    throw error;
})


export default axiosClient;