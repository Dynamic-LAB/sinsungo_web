import React,{useContext,useEffect} from 'react';
import DietIngredientItem from "./DietIngredientItem";
import styled from "styled-components";
import {Context} from "../../../Ingredient";
const ListBlock = styled.div`
  overflow-y: auto; //스크롤
  margin-top: 10px;
`;

const DietIngredientList = ({searchWord, onToggle}) => {
  const {state,dispatch}=useContext(Context);
  //해당 식단의 재료항목 ID와 냉장고 재료ID를 비교한다.
  return(
    <ListBlock>
      {state.IngredientList.map(ingredient => {
        if(!searchWord){
          return(<DietIngredientItem ingredient={ingredient} key={ingredient.id} onToggle={onToggle}/>)  
        }else{
          if(ingredient.name.indexOf(searchWord)!==-1){
          return(
            <DietIngredientItem ingredient={ingredient} key={ingredient.id} onToggle={onToggle}/>
          )
          }
        }
      })}
    </ListBlock>
  );
};

export default DietIngredientList;