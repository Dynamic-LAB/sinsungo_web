import { createContext, useReducer } from "react";
import axios from 'axios';
//initial state
const initialState = {
  MemberList:
   [
      { id:"1", name:"asd"},
    ]
  
};


// create context
const Context = createContext({});

// create reducer
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_":
      return {
        MemberList: action.payload.data
      };
    default:
      return state;
  }
};

// create Provider component (High order component)
const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, MemberProvider };