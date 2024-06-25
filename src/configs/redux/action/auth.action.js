import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginAction = (email, password, role) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${import.meta.env.VITE_URL_BLANJA}/auth/login`, {
        email,
        password,
        role,
      });
      console.log(response, '<<<<<<<<login');
      if (response.status === 200) {
        const { token, refreshToken } = response.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        dispatch(loginSuccess(response.data));
        // alert('Welcome!!')
      } else {
        dispatch(loginFailure('Login failed. Please try again.'));
        toast.error('Your Email & Password is incorrect. Please try again.');
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      toast.error('Your Email & Password is incorrect. Please try again.');
    }
  };
};
