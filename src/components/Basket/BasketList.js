import React,{useContext,useEffect} from 'react';
import styled from "styled-components";
import BasketShoppingListItem from "./BasketShoppingListItem";
import {useShoppingState} from "./ListContext";
import {Context} from "../../Ingredient";
import GetIngredientByRefrigratorId from "../ForServer/GetIngredientByRefrigratorId"
const ShoppingBlock = styled.div`
  overflow-y: auto; //스크롤
  
`;
const EmptyBlock = styled.div`
  padding-top: 165px;
  text-align: center;
  //margin-left: 230px;
  width: 180px;
  display: block;
  margin: 0 auto;

  .empty_image {
    display: flex;
    text-align: center;
  }
  .empty_text {
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
  }
  @media only screen and (max-width: 765px) {
    width: 120px;
    .empty_text {
      font-size: 10px;
    }
  }

`;

const BasketList = ({type}) => {
  const {
    state,
    dispatch,
  } = useContext(Context);
  useEffect(()=>{
    if(JSON.parse(sessionStorage.getItem('User'))){
    GetIngredientByRefrigratorId(
      {
          id:JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch:dispatch
      }
    )
    console.log("재료목록:",state);
  }
  },[])

  const lists = useShoppingState();
  return(
    <>
      {lists.length>0?(type === 'list' &&(
        <ShoppingBlock>
          {lists.map((list,index) =>{
            if(list.name.length>0)
            return(
            <BasketShoppingListItem
              key={index}
              id={list.id}
              name={list.name}
              memo={list.memo}
              count={list.amount}
              unit={list.unit}
              item={list}
            />)
        })}

        </ShoppingBlock>
      )):
        <EmptyBlock>
        <div className="empty_image">
          <div className="icon_basket_empty"/>
        </div>
        <div className="empty_text">장바구니를 먼저 작성해주세요!</div>
      </EmptyBlock>}

    </>
  )
};

export default BasketList;
