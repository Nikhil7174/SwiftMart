import { Dispatch } from 'redux'; // Make sure to import the Dispatch type
import { loginFailure, loginStart, loginSuccess, logoutSuccess } from './userRedux';
import { publicRequest } from '../apiRequest/index';

export const login = async (dispatch: Dispatch, user: any) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch: Dispatch) => {
  dispatch(logoutSuccess());
  // try {
  //   const res = await publicRequest.post('/auth/login', user);
  //   dispatch(logoutSuccess(res.data));
  // } catch (err) {
  //   dispatch(logoutFailure());
  // }
};