import axios from 'axios'
axios.defaults.withCredentials=true
export const submitReply = replyInfo=>{
    const {
        id,
        response,
        userEmail,
        userName
    }=replyInfo;
    return axios.post(`http://127.0.0.1:8080/interest/reply`,{
        id,
        response,
        userEmail,
        userName
    })
}

export const getUnprocessed=(current, limit)=>{
    return axios.get(`http://127.0.0.1:8080/interest/unprocessed?current=${current}&limit=${limit}`)
}

export const getProcessed=(current, limit)=>{
    return axios.get(`http://127.0.0.1:8080/interest/processed?current=${current}&limit=${limit}`)
}
