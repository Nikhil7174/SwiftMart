import { userRequest } from "../apiRequest";
import { Dispatch } from 'redux'; 
import { addProduct } from "./cartRedux";


export const addcarts = async (dispatch: Dispatch, cart: any) => {


    console.log(cart)
    console.log(cart.cartData.userId)

    if (!cart.cartData.userId) {
      console.log("User not authenticated");
      return;
    }

   
  
    const config = {
      headers: {
        Authorization: `Bearer ${cart.cartData.userId}`,
        
      },
    };
  
    try {
      const res = await userRequest.post(`/carts/${cart.cartData.userId}`, cart.cartData, config);
      console.log(cart.cartData)
      console.log(res.data)
      dispatch(addProduct(res.data));
    } catch (err) {
      console.log("Error adding cart items:", err);
      // Handle the error appropriately, such as showing an error message to the user
    }
  };

// export function addToCart(item:any) {
//     return new Promise(async (resolve) => {
//       const response = await userRequest('/carts', {
//         method: 'POST',
//         body: JSON.stringify(item),
//         headers: { 'content-type': 'application/json' },
//       });

//       const data:any = await response.json();
//       resolve({ data });
//     });
//   }
  
//   export function fetchItemsByUserId() {
//     return new Promise(async (resolve) => {
//       const response = await fetch('/cart');
//       const data = await response.json();
//       resolve({ data });
//     });
//   }
  
//   export function updateCart(update:any) {
//     return new Promise(async (resolve) => {
//       const response = await fetch('/cart/' + update.id, {
//         method: 'PATCH',
//         body: JSON.stringify(update),
//         headers: { 'content-type': 'application/json' },
//       });
//       const data = await response.json();
//       resolve({ data });
//     });
//   }
  
//   export function deleteItemFromCart(itemId:any) {
//     return new Promise(async (resolve) => {
//       const response = await fetch('/cart/' + itemId, {
//         method: 'DELETE',
//         headers: { 'content-type': 'application/json' },
//       });
//       const data = await response.json();
//       resolve({ data: { id: itemId } });
//     });
//   }
  
//   export function resetCart() {
//     // get all items of user's cart - and then delete each
//     return new Promise(async (resolve) => {
//       const response:any = await fetchItemsByUserId();
//       const items:any = response.data;
//       for (let item of items) {
//         await deleteItemFromCart(item.id);
//       }
//       resolve({ status: 'success' });
//     });
//   }