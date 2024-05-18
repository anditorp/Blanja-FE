import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const loginAction = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${import.meta.env.VITE_URL_BLANJA}/auth/login`, {
        email,
        password
      });
      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
        alert('Login success!');
      } else {
        dispatch(loginFailure('Login failed. Please try again.'));
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      alert('Login failed. Please try again.');
    }
  };
};
