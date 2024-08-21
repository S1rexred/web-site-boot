import axios from "axios";

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
  if (error.response && error.response.status === 401 && !refresh) {
    refresh = true;
    console.log('Refresh token:', localStorage.getItem('refresh_token'));

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    };

    try {
      const response = await axios.post('http://localhost:8000/token/refresh/', {
        refresh: localStorage.getItem('refresh_token')
      }, config);

      if (response.status === 200) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        return axios(error.config);
      } else {
        console.error('Не удалось обновить токен:', response);
        // Здесь можно перенаправить на страницу входа или показать сообщение об ошибке
      }
    } catch (err) {
      console.error('Ошибка при обновлении токена:', err);
      // Здесь также можно обработать ошибку
    } finally {
      refresh = false; // Сброс флага в любом случае
    }
  }

  return Promise.reject(error); // Возвращаем отклоненный промис для дальнейшей обработки
});