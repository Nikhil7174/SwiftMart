import { Dispatch } from 'redux'; // Make sure to import the Dispatch type
import { loginFailure, loginStart, loginSuccess, logoutSuccess, registerStart, registerSuccess, registerFailure } from './userRedux';
// import { addProduct , createCart, addProductFailure,addProductStart,addProductSuccess} from './cartRedux';
import { publicRequest } from '../apiRequest/index';

export const login = async (dispatch: Dispatch, user: any) => {
  dispatch(loginStart());
  try {
    console.log(user)
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

export const register = async (dispatch: Dispatch, user: any) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

// export const addcart = async (dispatch:Dispatch,cart:any) => {
//   dispatch(addProductStart());
//   try {
//     const res = await userRequest.post(`/carts`, cart);
//     dispatch(createCart(res.data));
//   } catch (err) {
//     dispatch(addProductFailure());
//   }
// };


// export const addcart = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const res = await userRequest.post(`/carts`, {
//         products,
//         ,
//       });

//       return res.data;
//     } catch (error:any) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );