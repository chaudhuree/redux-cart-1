import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import actions
import CartContainer from "./components/CartContainer";
// components
import Navbar from "./components/Navbar";
import reducer from "./reducer";
// redux stuff



const store = createStore(reducer);

// store.getState() returns the current state of the store
// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
