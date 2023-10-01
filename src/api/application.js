import axios from 'axios'
export const getApplicationInfo=(applyId)=>{
    return axios.get(`http://127.0.0.1/getApplication?applyId=${applyId}`).then(res=>{
        return res
    })
}

export const submitApplication=applyInfo=>{
    const{
        programmeId,
        appFormData,
        signature
    }=applyInfo;
    return axios.post(`http://127.0.0.1:8080/programme/apply?programmeId=${programmeId}`,{

        appFormData,
        signature
    })
}
