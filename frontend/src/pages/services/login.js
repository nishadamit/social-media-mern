import API from "../../constants/api";

export const login = async(credentials, dispatch) =>{
     dispatch({type: 'LOGIN_START'});
     try {
        const res = await API.post('/users/login', credentials);
        dispatch({ type: 'LOGIN_SUCCESS', payload: res?.data});
     } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error});
     }
}