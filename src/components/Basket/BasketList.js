import React,{useContext,useEffect} from 'react';
import styled from "styled-components";
import BasketShoppingListItem from "./BasketShoppingListItem";
import {useShoppingState} from "./ListContext";
import {Context} from "../../Ingredient";
import GetIngredientByRefrigratorId from "../ForServer/GetIngredientByRefrigratorId"
import emptyImage from "../../assets/img_basket_empty.png";

const ShoppingBlock = styled.div`
  overflow-y: auto; //스크롤
`;
const EmptyBlock = styled.div`
  padding-top: 165px;
  text-align: center;
  //margin-left: 230px;
  width: 220px;
  display: block;
  margin: 0 auto;

  .empty_image {
    display: flex;
    text-align: center;
  }
  .empty_text {
    margin-top: 30px;
    text-align: center;
    font-size: 15px;
  }
  .img_basket_empty {
    width: 220px;
  }
  @media only screen and (max-width: 765px) {
    width: 200px;
    .img_basket_empty {
      width: 200px;
    }
    .empty_text {
      font-size: 12px;
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
          <img className="img_basket_empty" src={emptyImage} alt="장바구니 텅 이미지"/>
        </div>
        <div className="empty_text">장보기 목록이 비어있어요!</div>
      </EmptyBlock>}

    </>
  )
};

export default BasketList;
