import React, { useState, useContext } from "react";
import { Context } from "../context";

const Users = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      <p>index page</p>
      <button
        onClick={() =>
          dispatch({
            type: "LOGGED_IN_USER",
            payload: "Adeola Fafemi",
          })
        }
      >
        login
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "LOGGED_IN_USER",
            payload: null,
          })
        }
      >
        logout
      </button>
      {JSON.stringify(state)}
    </div>
  );
};

export default Users;
