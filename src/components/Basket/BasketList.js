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
          {lists.map(list =>(
            <BasketShoppingListItem
              key={list.shopping_id}
              id={list.shopping_id}
              name={list.shopping_name}
              memo={list.shopping_index}
              count={list.shopping_count}
              unit={list.shopping_count_unit}
              checked={list.shopping_checked}
            />
          ))}
        </ShoppingBlock>
      )}

    </>
  )
};

export default BasketList;
