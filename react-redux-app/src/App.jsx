import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterWithRedux from "./components/CounterWithRedux";

function App() {
  return (
    <>
      <Counter />
      <CounterWithRedux />
    </>
  );
}

export default App;
