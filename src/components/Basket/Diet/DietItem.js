import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
  font-size: 13px;
`;
const DateBlock = styled.div`
  display: flex;
  padding: 5px;
  .diet_date {
    margin-right: 5px;
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

const DietItem = (props) => {
  return(
    <ItemBlock>
      <DateBlock>
        <div className="diet_date">
          {props.date}
        </div>
        <div className="diet_date_choice">
          {props.choice}
        </div>
        <div className="diet_date_menu">
          {props.menu}
        </div>
      </DateBlock>
      <FoodBlock>
        <div className="diet_food">
          {props.food.map((n,_i)=>{return n+(_i<props.food.length-1?', ':'')})}
        </div>
      </FoodBlock>
      <IngredientBlock>
        <div className="diet_main_ingredient">
          {props.ingredient}
        </div>
        <div className="diet_main_ingredient_item">
          {props.ingredient_item.map((n,_i)=>{return n+(_i<props.ingredient_item.length-1?', ':'')})}
        </div>
      </IngredientBlock>

    </ItemBlock>
  );
}

export default DietItem;