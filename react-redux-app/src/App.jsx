import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterWithRedux from "./components/CounterWithRedux";
import Authentication from "./components/Authentication";

function App() {
  return (
    <>
      <Counter />
      <CounterWithRedux />
      <Authentication />
    </>
  );
}

export default App;
