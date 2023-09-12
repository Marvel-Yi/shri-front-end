import axios from 'axios'

export const loginUser = loginInfo => {
    const {
        userName,
        password,
    } = loginInfo;
    /**
     * url瞎写的
     */
    return axios.post(`http://192.168.1.39:8080/login`, {
        userName,
        password,
    }).then(res => {
        return res
    })
}

export const register = registerInfo =>{
    const{
        userName,
        email,
        password,
        confirmPassword
    }= registerInfo;
    return axios.post('http://127.0.0.1:8080/register',{
        userName,
        email,
        password,
        confirmPassword
    }).then(res=>{
        return res
    })
}
export const checkCookieValid=()=>{
    return axios.post(`http://127.0.0.1:8080/loginStatus`).then(res=>{
        return res
    })
}
