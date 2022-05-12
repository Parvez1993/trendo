import { createContext, useReducer } from "react";

const Store = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEMS":
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existingItem
        ? state.cart.cartItems.map((item) =>
            item._id === existingItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };

    case "CLEAR_CART": {
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [],
        },
      };
    }

    case "CART_REMOVE_ITEMS": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };
    }
    default:
      return state;
  }
}

//user auth

//auth Reducers////////////////
let userInitialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  loading: false,
  error: "",
};
function userReducer(state, action) {
  switch (action.type) {
    //login
    case "LOGIN_BEGIN":
      // localStorage.setItem("userInfo", JSON.stringify(userInfo));
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "LOGIN_SUCCESS":
      let userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      return {
        ...state,
        loading: false,
        error: "",
        userInfo: userInfo,
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    //register

    case "REGISTER_BEGIN":
      // localStorage.setItem("userInfo", JSON.stringify(userInfo));
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "REGISTER_SUCCESS":
      let info = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(info));
      return {
        ...state,
        loading: false,
        error: "",
        userInfo: info,
      };

    case "REGISTER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        userInfo: null,
        loading: false,
        error: "",
      };
    default:
      return state;
  }
}

function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const value = { state, dispatch, userState, userDispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

export { Store, StoreProvider };
