import React, {useEffect, useState, useContext} from 'react';
import styled from "styled-components";
import FridgeItem from "./FridgeItem";
import {Context} from '../../Ingredient';

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
  text-align: center;
  //display: flex;
  //justify-content: center;
  //align-items: center;
`;
const EmptyBlock = styled.div`
  display: block; 
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
  //margin-left: 230px;
  width: 200px;
  .empty_image {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .empty_text {
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
  }
  @media only screen and (max-width: 765px) {
    width: 150px;
    .empty_text {
      font-size: 10px;
    }
  }
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
  if(isChange!==1){
    SetEmpty(false);
  }
},[state.IngredientList])
  return (
    <>
        {
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

              })}
          </IngredientBlock>

        }

        {!empty?
          <EmptyBlock>
            <div className="empty_image">
              <div className="icon_fridge_empty"/>
            </div>

            <div className="empty_text">냉장고에 재료를 먼저 넣어주세요!</div>
          </EmptyBlock>
          :null}
    </>

  );
};

export default FridgeList;