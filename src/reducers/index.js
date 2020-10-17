const initialState = {
  favorites: 0,
};

export default function rootReducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        favorites: state.favorites + 1,
      };
    case "DECREMENT":
      return {
        favorites: state.favorites - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
}
