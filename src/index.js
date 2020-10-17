import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

// What is the Redux store is an object. When it comes to Redux, you still have to specify what the shape of your state will look like. The main shape that most developers take is an object.

//In this case, the Redux createStore() function takes accepts a parameter of type function. That function is known as a reducer and it's meant to be passed into the createStore() function and return the state.

// function reducer(state = initialState, action) {
//   console.log("reducer", state, action);
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         favorites: state.favorites + 1,
//       };
//     case "DECREMENT":
//       return {
//         favorites: state.favorites - 1,
//       };
//     case "RESET":
//       return {
//         count: 0,
//       };
//     default:
//       return state;
//   }
// }

// The reducer's job is to take the current state and an action and return the new state. It has another job too: It should return the initial state the first time it's called.
// The reducer function is based on the reduce Array method.

//Reducers must be pure functions. Pure functions are functions that can't modify their arguments, and they can't have side effects. A side effect is any change to something ouside the scope of the function. Don't change variables outside the scope of the function, don't call other functions that change things (like fetch(), which affects the network and other systems), don't dispatch actions, and so on. The most important thing is this: don't modify the state argument.

// const initialState = {
//   favorites: 0,
// };

// const store = createStore(reducer);

//console.log(store);

// Every call to dispatch results in a call to your reducer.
//store.dispatch({ type: "INCREMENT" });

//console.log(store);
// Redux calls your reducer at the time you created the store.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
