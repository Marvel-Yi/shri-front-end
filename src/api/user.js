import axios from 'axios'

export const loginUser = loginInfo => {
    const {
        email,
        password,
    } = loginInfo;
    /**
     * url瞎写的
     */
    return axios.post(`http://127.0.0.1:8080/login`, {
        email,
        password,
    }).then(res => {
        return res
    })
}
