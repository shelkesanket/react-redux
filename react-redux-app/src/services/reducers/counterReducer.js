import { DECREMENT, INCREMENT, RESET } from "../constant";
const inttialState = {
  count: 0,
};
const counterReducer = (state = inttialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 5,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count === 0 ? state.count : state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
export default counterReducer;
