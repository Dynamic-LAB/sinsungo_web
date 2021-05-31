import React, {useEffect, useState, useContext} from 'react';
import styled from "styled-components";
import FridgeItem from "./FridgeItem";
import {Context} from '../../Ingredient';

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
  text-align: center;
`;

const FridgeList = ({onRemove, type}) => {
  const {
    state,
    dispatch,
  } = useContext(Context);
  //const [show, setShow] = useState(false);

  return (
    <IngredientBlock>
      {
        state.IngredientList.map(item => {
          if (item.category === type) {
            return (
              <FridgeItem
                ingredient={item}
                key={item.id}
                onRemove={onRemove}
              />
            )
          }
        })
      }
      {/*<div className="icon_fridge_empty"/>*/}
    </IngredientBlock>
  );
}

export default FridgeList;