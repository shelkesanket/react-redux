import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../services/actions";

const CounterWithRedux = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(counter);
  return (
    <div>
      <h1>CounterWithRedux {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
};

export default CounterWithRedux;
