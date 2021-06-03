import React from 'react';
import DietCard from "./DietCard";
import {useDietState} from "./DietContext";
import styled from "styled-components";

const EmptyBlock = styled.div`
  margin-top: 150px;
  text-align: center;
  //margin-left: 230px;
  width: 180px;

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

const DietList = () => {
  const diets = useDietState();
  //id, memo, food, date, ingredient_item
  return (
    <>
      {
        (diets[0] && diets[0].id !== "nodata") ? diets.map((diet, _i) => {
            return (
              <DietCard
                diet={diet}
                id={diet.id}
                memo={diet.memo}
                date={diet.date}
                food={diet.menus.map((item, _i) => {
                  if (item) return ((_i > 0 ? "," : "") + item);
                  return ""
                })}
                ingredient_item={diet.ingredients.map((item, _i) => {
                  if (item.id != null) {
                    return ((_i > 0 ? "," : "") + item.name)
                  }
                  return null
                })}
              />)
          }) :
          <EmptyBlock>
            <div className="empty_image">
              <div className="icon_diet_empty"/>
            </div>
            <div className="empty_text">식단을 먼저 작성해주세요!</div>
          </EmptyBlock>
      }


    </>
  );
}
export default DietList;