import axios from 'axios'
import app from "../App.vue";
axios.defaults.withCredentials=true
export const submitReply = replyInfo=>{
    const {
        id,
        response,
        userEmail,

    }=replyInfo;
    return axios.post(`http://127.0.0.1:8080/interest/reply`,{
        id,
        response,
        userEmail,

    })
}

export const getUnprocessed=(current, limit)=>{
    return axios.get(`http://127.0.0.1:8080/interest/unprocessed?current=${current}&limit=${limit}`)
}

export const getProcessed=(current, limit)=>{
    return axios.get(`http://127.0.0.1:8080/interest/processed?current=${current}&limit=${limit}`)
}
export const getAllApplication=(status,limit,current)=>{
    return axios.get(`http://127.0.0.1:8080/programme/application?status=${status}&current=${current}&limit=${limit}`)
}

export const changeApplicationStatus=(appId,status,reason)=>{
    return axios.post(`http://127.0.0.1:8080/programme/application/decide?appId=${appId}&status=${status}&advice=${reason}`)
}
