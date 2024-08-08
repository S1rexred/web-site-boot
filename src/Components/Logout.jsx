import { useEffect } from "react";

const Logout = () => {
    useEffect(() => {
    (async ()=> {
        try{
            const config = {
            headers: {
                'Content-Type' : 'application/json'
            },
            withCredentials: true
            };
            const response = await axios.post('http://localhost:8000/token/refresh', {
                refresh:localStorage.getItem('refresh_token')
            }, config);
            localStorage.clear()
            axios.defaults.headers.common['Authorization'] = null
            window.location.href = '/login'

        }
        catch (e) {
            console.log('logout now work',e)
        }
    })()
    },[])
    return (
        <div/>
    )
}

export default Logout