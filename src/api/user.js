import axios from 'axios'

export const loginUser = loginInfo => {
    const {
        userName,
        password,
    } = loginInfo;
    /**
     * url瞎写的
     */
    return axios.post(`http://127.0.0.1:8080/login`, {
        userName,
        password,
    }).then(res => {
        return res
    })
}

export const checkCookieValid=()=>{
    return axios.post(`http://127.0.0.1:8080/check`).then(res=>{
        return res
    })
}
