import axios from "axios";
let accessToken;

const getToken = () =>{
    let data = localStorage.getItem('loginData');
    if(data){
        accessToken = JSON.parse(data)?.token;
    }
}
getToken();


const api =  axios.create({
    baseURL: 'http://localhost:4000/api'
})

api.interceptors.request.use((request) =>{
    request.headers.authorization = `Bearer ${accessToken}`;
    return request;
  },(error) =>{
    return Promise.reject(error)
  })

export default api;