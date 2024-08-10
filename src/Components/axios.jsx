import React from 'react'
import axios from 'axios'

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response && error.response.status === 401 && !refresh) {
        refresh = true;
        console.log(localStorage.getItem('refresh_token'));
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        };

        try {
            const response = await axios.post('http://localhost:8000/token/refresh', {
                refresh: localStorage.getItem('refresh_token')
            }, config);

            if (response.status === 200) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                
                return axios(error.config);
            }
        } catch (err) {
            // Обработка ошибки обновления токена
            console.error('Token refresh failed:', err);
            // Можно также сбросить refresh, если нужно
            refresh = false;
            return Promise.reject(err); // Возвращаем ошибку дальше
        } finally {
            refresh = false; // Сбрасываем флаг после завершения
        }
    }

    return Promise.reject(error); // Возвращаем оригинальную ошибку
});
