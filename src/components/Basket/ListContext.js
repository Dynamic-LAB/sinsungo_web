import React, {useReducer, createContext, useContext, useRef} from "react";

const initialShopping = [
  {
    shopping_id: 1,
    shopping_name: '감자',
    shopping_index: '냠냠',
    shopping_count: '0',
  },
  {
    shopping_id: 2,
    shopping_name: '고구마',
    shopping_index: '사이다도 같이 사기',
    shopping_count: '0',
  },

];

function shoppingReducer(state, action){
  switch (action.type){
    case 'CREATE':
      return state.concat(action.shopping);
    case 'REMOVE':
      return state.filter(shopping => shopping.shopping_id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ShoppingStateContext = createContext();
const ShoppingDispatchContext = createContext();
const ShoppingNextIdContext = createContext();

export function ShoppingProvider({children}) {
  const [state, dispatch] = useReducer(shoppingReducer, initialShopping);
  const nextId = useRef(3);
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
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useShoppingDispatch() {
  const context = useContext(ShoppingDispatchContext);
  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
export function useShoppingNextId(){
  const context = useContext(ShoppingNextIdContext);
  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}