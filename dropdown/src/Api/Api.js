import axios from 'axios'

const url = 'http://localhost:3004/'
const fetchData = (endpoint,id='')=>{
    console.log("Api calling")
     return axios.get(`${url}${endpoint}/${id}`).then(result=>{
            // console.log(result.data)
            return result.data
        })
} 


export default 
{
    fetchData
}