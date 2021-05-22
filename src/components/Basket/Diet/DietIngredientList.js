import React from 'react';
import DietIngredientItem from "./DietIngredientItem";
import styled from "styled-components";

const ListBlock = styled.div`
  overflow-y: auto; //스크롤
  margin-top: 10px;
`;
const DietIngredientList = ({ingredients, onToggle}) => {
  return(
    <ListBlock>
      {ingredients.map(ingredient => (
        <DietIngredientItem ingredient={ingredient} key={ingredient.id} onToggle={onToggle}/>
      ))}
    </ListBlock>
  );
};

export default DietIngredientList;