import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../services/actions";

const Authentication = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>Your are LOGGED IN 🔵</p>
        </div>
      ) : (
        <div>
          <p>Your are LOGGED OUT 🔴</p>
        </div>
      )}
    </div>
  );
};

export default Authentication;
