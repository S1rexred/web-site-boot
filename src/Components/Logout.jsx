import {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const navigate = useNavigate(); // Получение функции navigate
  useEffect(()=> {

      (async () => {
        try{
          const config = {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
            };
          const {data} = await axios.post('http://localhost:8000/logout/',{
            refresh_token: localStorage.getItem('refresh_token')
          },config);
          localStorage.clear();
          axios.defaults.headers.common['Authorization'] = null;
          navigate('/')
        }catch(e){
          console.log('logout not work',e)
        }
      })();
  },[]);
}

export default Logout