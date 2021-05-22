import React from 'react';
import styled from "styled-components";
import BasketShoppingListItem from "./BasketShoppingListItem";
import {useShoppingState} from "./ListContext";

const ShoppingBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const BasketList = ({type}) => {
  const lists = useShoppingState();
  return(
    <>
      {type === 'list' &&(
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
              checked={list.shopping_checked}
            />)
        })}

        </ShoppingBlock>
      )}

    </>
  )
};

export default BasketList;
