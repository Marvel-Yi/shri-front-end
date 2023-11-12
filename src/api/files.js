import axios from 'axios'
export const getFile=(fileName)=>{
    return axios.get(`http://127.0.0.1document/preview?fileName=${fileName}`)
}
