import React, {useReducer, createContext, useContext, useRef} from "react";

const initialDiet = [
  {
    id: "nodata",
    date:'2020/01/01',
    memo: '',
    menus: [],
    ingredients:[],
  },
];

function dietReducer(state, action){
  switch (action.type){
    case 'ADD_':
      return action.payload.data;
    case 'CREATE':
      return state.concat(action.diet);
    case 'REMOVE':
      return state.filter(shopping => shopping.diet_id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
const DietStateContext = createContext();
const DietDispatchContext = createContext();
const DietNextIdContext = createContext();

export function DietProvider({children}) {
  const [state, dispatch] = useReducer(dietReducer, initialDiet);
  const nextId = useRef(2);
  return (
    <DietStateContext.Provider value={state}>
      <DietDispatchContext.Provider value={dispatch}>
        <DietNextIdContext.Provider value={nextId}>
          {children}
        </DietNextIdContext.Provider>
      </DietDispatchContext.Provider>
    </DietStateContext.Provider>
  );
}
export function useDietState() {
  const context = useContext(DietStateContext);
  if(!context) {
    throw new Error('Cannot find DietProvider');
  }
  return context;
}

export function useDietDispatch() {
  const context = useContext(DietDispatchContext);
  if(!context) {
    throw new Error('Cannot find DietProvider');
  }
  return context;
}
export function useDietNextId(){
  const context = useContext(DietNextIdContext);
  if(!context) {
    throw new Error('Cannot find DietProvider');
  }
  return context;
}