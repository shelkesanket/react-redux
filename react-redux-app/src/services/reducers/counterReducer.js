import { DECREMENT, INCREMENT, RESET } from "../constant";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 5;
    case DECREMENT:
       return state > 0 ? state - 1 : state;
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};
export default counterReducer;
