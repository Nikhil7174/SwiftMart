import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProduct {
  // Define the type for your cart product here
}

interface CartState {
  currentUserCart: object
  userId: string;
  products: string[];
  quantity: number;
  total: number;
  isFetching:boolean;
  error:boolean;
}

const initialState: CartState = {
  currentUserCart:[],
  userId:"",
  products: [],
  quantity: 0,
  total: 0,
  isFetching: false,
  error: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      state.currentUserCart = action.payload;
      state.userId= action.payload.userId;
    },
    // createCart: (state, action: PayloadAction<any>) => {
    //   console.log(action.payload)
    //   console.log(state.products)
    //   console.log(state)
    //   state.userId = action.payload.userId;
    //   state.quantity += 1;
    //   state.products.push(action.payload);
    //   state.total += action.payload.price * action.payload.quantity;
    //   console.log(state.userId)
    // },
    createCart: (state, action: PayloadAction<any>) => {
      const newProduct = action.payload;
      const newTotal = state.total + newProduct.price * newProduct.quantity;
    
      return {
        ...state,
        // currentUserCart = action.payload;
        userId: newProduct.userId,
        quantity: state.quantity + 1,
        products: [...state.products, newProduct],
        total: newTotal,
      };
    },
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { addProduct, createCart, addProductStart, addProductSuccess, addProductFailure } = cartSlice.actions;
export default cartSlice.reducer;