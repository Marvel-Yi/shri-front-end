import axios from 'axios'
axios.defaults.withCredentials=true
export const submitReply = replyInfo=>{
    const {
        header,
        body,
        footer
    }=replyInfo;
    return axios.post(`http://127.0.0.1:8080/interest/reply`,{
        header,
        body,
        footer
    })
}
