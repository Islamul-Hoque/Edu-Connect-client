import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    // baseURL: 'https://etuitionbd-api.vercel.app',
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
    // Request interceptor: attach JWT from localStorage
    const reqInterceptor = axiosSecure.interceptors.request.use(
        (config) => { 
        const token = localStorage.getItem('jwt-token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
    );

    // Response interceptor: handle 401/403
    const resInterceptor = axiosSecure.interceptors.response.use(
    (response) => response,
        (error) => {
            const statusCode = error.response?.status;
            if (statusCode === 401 || statusCode === 403) {
            logOut()
            .then(() => {
            navigate('/login');
            });
        }
        return Promise.reject(error);
    }
    );

    // Cleanup interceptors on unmount
    return () => {
        axiosSecure.interceptors.request.eject(reqInterceptor);
        axiosSecure.interceptors.response.eject(resInterceptor);
    };
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;






// import axios from 'axios';
// import { useEffect } from 'react';
// import useAuth from './useAuth';
// import { useNavigate } from 'react-router-dom';

// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:3000',
//   // baseURL: 'https://etuitionbd-api.vercel.app',
// });

// const useAxiosSecure = () => {
//   const { logOut } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Request interceptor
//     const reqInterceptor = axiosSecure.interceptors.request.use(
//       (config) => {
//         const token = localStorage.getItem('jwt-token');
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     // Response interceptor
//     const resInterceptor = axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const statusCode = error.response?.status;
//         if (statusCode === 401 || statusCode === 403) {
//           await logOut();           // ✅ wait for logout
//           navigate('/login');       // ✅ redirect after cleanup
//         }
//         return Promise.reject(error);
//       }
//     );

//     // ✅ Cleanup interceptors
//     return () => {
//       axiosSecure.interceptors.request.eject(reqInterceptor);
//       axiosSecure.interceptors.response.eject(resInterceptor);
//     };
//   }, [logOut, navigate]);

//   return axiosSecure;
// };

// export default useAxiosSecure;