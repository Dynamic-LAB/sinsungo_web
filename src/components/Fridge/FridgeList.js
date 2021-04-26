import React, {useState} from 'react';
import styled from "styled-components";
import FridgeItem from "./FridgeItem";

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;
const FridgeList = ({ingredients, onRemove}) =>{


  return(
    <IngredientBlock>
      {ingredients.map(ingredient =>(
        <FridgeItem
          ingredient={ingredient}
          key={ingredient.id}
          onRemove={onRemove}
        />
      ))}
    </IngredientBlock>
  );
}

export default FridgeList;
