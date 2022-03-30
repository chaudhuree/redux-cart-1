import cartItems from "./cart-items";
import {
  CLEAR_CART,
  DECREASE,
  GET_TOTALS,
  INCREASE,
  REMOVE,
  
} from "./components/action";
const initialState = { cart: cartItems, total: 0, amount: 0 };
export default function reducer(state = initialState, action) {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((item) => item.id !== action.payload.id);
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.total += cartItem.price * cartItem.amount;
        cartTotal.amount += cartItem.amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );

    total = +total.toFixed(2); //+total.toFixed(2) converts to number
    console.log(total, amount, typeof total);
    return {
      ...state,
      total,
      amount,
    };
  }

  return state;
}
