import React, {useState} from 'react';
import styled from "styled-components";
import BasketShoppingListItem from "./BasketShoppingListItem";

const ShoppingBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const BasketList = ({lists, type, onRemove}) => {
  return(
    <>
      {type === 'list' &&(
        <ShoppingBlock>
          {lists.map(list =>(
            <BasketShoppingListItem
              list={list}
              key={list.shopping_id}
              onRemove={onRemove}
            />
          ))}
        </ShoppingBlock>
      )}

    </>
  )
};

export default BasketList;
