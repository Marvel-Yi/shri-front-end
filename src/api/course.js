import axios from 'axios'
export const getCourses = filterParams =>{
    const{
        studyMode,//integer
        certificateType//list<string>
    }=filterParams;
    return axios.post(`http://127.0.0.1:8080/getCourses`,{
        studyMode,
        certificateType
    }).then(res=>{
        return res
    })
}
