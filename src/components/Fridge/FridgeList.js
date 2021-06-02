import React, {useEffect, useState, useContext} from 'react';
import styled from "styled-components";
import FridgeItem from "./FridgeItem";
import {Context} from '../../Ingredient';

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
  text-align: center;
`;
let data=[];
const FridgeList = ({onRemove, type}) => {
  const {
    state,
    dispatch,
  } = useContext(Context);
  //const [show, setShow] = useState(false);
  const [empty,SetEmpty]=useState(false);
useEffect(()=>{
  let isChange=0;
  state.IngredientList.map(item => {
    if (item.category === type) {
      isChange=1;
      SetEmpty(true);
    }
  })
  if(isChange!=1){
    SetEmpty(false);
  }
},[state.IngredientList])
  return (
    
    <IngredientBlock>
      {
        state.IngredientList.map(item => {
          if (item.category === type) {
            return (
              <>
              <FridgeItem
                ingredient={item}
                key={item.id}
                onRemove={onRemove}
              />
              </>
            )
          }
        })
      }

      {!empty?<div className="icon_fridge_empty"/>:null}
    </IngredientBlock>
  );
}

export default FridgeList;