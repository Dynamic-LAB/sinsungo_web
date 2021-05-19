import React, {useEffect, useState,useContext} from 'react';
import styled from "styled-components";
import FridgeItem from "./FridgeItem";
import {Context} from '../../Ingredient';

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const FridgeList = ({ onRemove, type}) =>{
  const {
    state,
    dispatch,
  } = useContext(Context);

  return(
    
    <IngredientBlock>
      {
          state.IngredientList.map((item,index)=>{
          if(item.category==type){
         return(
           <FridgeItem
          ingredient={item}
          key={item.id}
          onRemove={onRemove}
          />
          )
         }
        })
      }
    </IngredientBlock>
  );
}

export default FridgeList;