import React from 'react';
import DietCard from "./DietCard";
import {useDietState} from "./DietContext";
import styled from "styled-components";
import emptyImage from "../../../assets/img_diet_empty.png";

const EmptyBlock = styled.div`
  padding-top: 150px;
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
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
  }
  .img_diet_empty {
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
              <img className="img_diet_empty" src={emptyImage} alt="식단 텅 이미지"/>
            </div>
            <div className="empty_text">식단을 먼저 작성해주세요!</div>
          </EmptyBlock>
      }


    </>
  );
}
export default DietList;