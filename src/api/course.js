import axios from 'axios'
export const getCourses = filterParams =>{
    const{
        current,
        limit,
        studyMode, // string
        certificateTypes // list<string> full-time part-time
    }=filterParams;
    return axios.post(`http://127.0.0.1:8080/programme/list`,{
        current,
        limit,
        studyMode,
        certificateTypes
    }).then(res=>{
        return res
    })
}
