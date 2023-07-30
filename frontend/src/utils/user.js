export const getUserDetails = () =>{
    let data = localStorage.getItem('loginData');
    const { user } = JSON.parse(data);
    return user;
}