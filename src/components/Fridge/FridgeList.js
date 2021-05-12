import React, {useEffect, useState,useContext} from 'react';
import styled from "styled-components";
import FridgeItem from "./FridgeItem";
import {Context} from '../../Ingredient';
import GetIngredientByRefrigratorId from '../ForServer/GetIngredientByRefrigratorId'
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
          state.IngredientList.map(item=>{
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