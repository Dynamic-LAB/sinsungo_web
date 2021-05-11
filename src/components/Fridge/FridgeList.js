import React, {useState} from 'react';
import styled from "styled-components";
import FridgeItem from "./FridgeItem";

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const FridgeList = ({ingredients, onRemove,  setIngredients}) =>{
  return(
    <IngredientBlock>
      {
          ingredients?ingredients.data.map(ingredient => {
            return(  
              <FridgeItem
              ingredient={ingredient}
              key={ingredient.id}
              onRemove={onRemove}
              />)
          }):console.log("Fridge List// 반복문 구성 실패 (냉장고 미할당)")
      }
    </IngredientBlock>
  );
}

export default FridgeList;
