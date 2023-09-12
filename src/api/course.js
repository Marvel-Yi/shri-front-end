import axios from 'axios'
export const getCourses = filterParams =>{
    const{
        current,
        limit,
        studyMode, // string
        certificateType // list<string> full-time part-time
    }=filterParams;
    return axios.post(`http://127.0.0.1:8080/programmeList`,{
        current,
        limit,
        studyMode,
        certificateType
    }).then(res=>{
        return res
    })
}
