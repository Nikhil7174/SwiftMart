import { Product } from "../types/Products";

export type State = {
  products: Product[];
  loading: boolean;
  error: string;
};

export type Action =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Product[];
    }
  | { type: "FETCH_FAIL"; payload: string };

const initialState: State = {
  products: [],
  loading: false,
  error: "",
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
