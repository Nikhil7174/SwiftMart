import * as api from "../api";
import { Dispatch } from "redux";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";

export const fetchData = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: "FETCH_REQUEST" });
    const result = await api.fetchProducts();
    dispatch({ type: "FETCH_SUCCESS", payload: result.data });
  } catch (err) {
    dispatch({ type: "FETCH_FAIL", payload: getError(err as ApiError) });
  }
};
