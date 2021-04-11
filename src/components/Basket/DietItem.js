import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
  font-size: 13px;
`;
const DateBlock = styled.div`
  display: flex;
  padding: 5px;
  .diet_date {
    margin-right: 8px;
  }
`;
const FoodBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  .diet_food {
    float: right;
    font-weight: 700;
  }
`;
const IngredientBlock = styled.div`
  display: flex;
  padding: 5px;
  font-size: 10px;
  .diet_main_ingredient {
    color: #27D598;
    margin-right: 10px;
  }
  .diet_main_ingredient_item {
    margin-right: 10px;
  }
`;

const DietItem = () => {
  return(
    <ItemBlock>
      <DateBlock>
        <div className="diet_date">
          2021년 04월 11일
        </div>
        <div className="diet_date_choice">
          아침
        </div>
        <div className="diet_date_menu">
          메뉴는
        </div>
      </DateBlock>
      <FoodBlock>
        <div className="diet_food">
          음식1
        </div>
        <div className="diet_food">
          음식2
        </div>
      </FoodBlock>
      <IngredientBlock>
        <div className="diet_main_ingredient">
          주재료
        </div>
        <div className="diet_main_ingredient_item">
          멸치
        </div>
      </IngredientBlock>

    </ItemBlock>
  );
}

export default DietItem;