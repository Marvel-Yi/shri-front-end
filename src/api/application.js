import axios from 'axios'
export const getApplicationInfo=(applyId)=>{
    return axios.get(`http://127.0.0.1/getApplication?applyId=${applyId}`).then(res=>{
        return res
    })
}
