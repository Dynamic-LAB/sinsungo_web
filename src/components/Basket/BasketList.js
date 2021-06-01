import React,{useContext,useEffect} from 'react';
import styled from "styled-components";
import BasketShoppingListItem from "./BasketShoppingListItem";
import {useShoppingState} from "./ListContext";
import {Context} from "../../Ingredient";
import GetIngredientByRefrigratorId from "../ForServer/GetIngredientByRefrigratorId"
const ShoppingBlock = styled.div`
  overflow-y: auto; //스크롤
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
  };
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
      )):<div>Empty</div>}

    </>
  )
};

export default BasketList;
