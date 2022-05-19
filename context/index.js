import { useState, useEffect, useReducer, createContext } from "react";
import { user } from "./reducers/users";

// initial state
const initialState = {
  users: {},
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

// context provider
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(user), initialState); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
