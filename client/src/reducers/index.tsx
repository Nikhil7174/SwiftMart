import { combineReducers } from "redux";

import products from "./products";
// import auth from "./auth";

const rootReducer: any = combineReducers({
  products: products,
  //   auth: auth,
});

export default rootReducer;
