import API from "../../constants/api";
import { Swl } from "../../components/Swl";

export const login = async(credentials, dispatch,navigateToHome) =>{
     dispatch({type: 'LOGIN_START'});
     try {
        const res = await API.post('/users/login', credentials);
        dispatch({ type: 'LOGIN_SUCCESS', payload: res?.data});
        navigateToHome();
     } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error});
        console.log(error)
        Swl.fire({
         icon: 'error',
         title: error?.response?.data?.message,
        })
     }
}