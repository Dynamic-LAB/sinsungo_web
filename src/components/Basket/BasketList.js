import React, {useState} from 'react';
import styled from "styled-components";
import BasketShoppingListItem from "./BasketShoppingListItem";
import BasketRecommendItem from "./BasketRecommendItem";

const RecommendBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const ShoppingBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const BasketList = ({recommends, lists, type, onRemove}) => {
  return(
    <>
      {type === 'recommend' &&(
        <RecommendBlock>
          {recommends.map(recommend => (
            <BasketRecommendItem
              recommend={recommend}
              key={recommend.recommend_id}
              onRemove={onRemove}
            />
          ))}
        </RecommendBlock>
      )}
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
