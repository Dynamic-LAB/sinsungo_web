import React, {useState,useContext} from 'react';
import {Context} from './Ingredient';
import GetIngredientByRefrigratorId from './components/ForServer/GetIngredientByRefrigratorId';
const Hello =()=>{
    const {
        state,
        dispatch,
      } = useContext(Context);

    return(/*<>
    <button
        onClick={() => {GetIngredientByRefrigratorId(
            {
                id:JSON.parse(sessionStorage.getItem('User')).newRefId,
                dispatch:dispatch
            }
        )}}
      >
        Add fruit
      </button>
    <h2>Homeplus</h2>
        {JSON.stringify(state)}</>*/<div></div>)
}

export default Hello;