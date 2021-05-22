import React, {useReducer, createContext, useContext, useRef} from "react";

const initialShopping = [
  {

    id: '-',
    name: '',
    memo: '',
    amount: '',
    unit: '',
    shopping_checked: false,
  }


];

function shoppingReducer(state, action){
  switch (action.type){
    case 'ADD_':
      return action.payload.data;
    case 'CREATE':
      return state.concat(action.shopping);
    case 'REMOVE':
      return state.filter(shopping => shopping.shopping_id !== action.id);
    case 'TOGGLE':
      return state.map(
        shopping => shopping.shopping_id === action.id ? {...shopping, shopping_checked: !shopping.shopping_checked} : shopping
      );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ShoppingStateContext = createContext();
const ShoppingDispatchContext = createContext();
const ShoppingNextIdContext = createContext();

export function ShoppingProvider({children}) {
  const [state, dispatch] = useReducer(shoppingReducer, initialShopping);
  const nextId = useRef(2);
  return (
    <ShoppingStateContext.Provider value={state}>
      <ShoppingDispatchContext.Provider value={dispatch}>
        <ShoppingNextIdContext.Provider value={nextId}>
          {children}
        </ShoppingNextIdContext.Provider>
      </ShoppingDispatchContext.Provider>
    </ShoppingStateContext.Provider>
  );
}

export function useShoppingState() {
  const context = useContext(ShoppingStateContext);
  if(!context) {
    throw new Error('Cannot find ListProvider');
  }
  return context;
}

export function useShoppingDispatch() {
  const context = useContext(ShoppingDispatchContext);
  if(!context) {
    throw new Error('Cannot find ListProvider');
  }
  return context;
}

export function useShoppingNextId(){
  const context = useContext(ShoppingNextIdContext);
  if(!context) {
    throw new Error('Cannot find ListProvider');
  }
  return context;
}