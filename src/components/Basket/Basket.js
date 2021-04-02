import React from "react";
import "./Basket.css";
import styled from 'styled-components';
import WhiteBox from "../common/WhiteBox";
import {MdAdd} from "react-icons/md";
import BasketRecommendItem from "./BasketRecommendItem";
import BasketShoppingListItem from "./BasketShoppingListItem";

const WhiteBoxDiet = styled(WhiteBox)`
  height: 200px;
`;
const WhiteBoxBasket = styled(WhiteBox)`
  height: 500px
`;
const BasketTitle = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  font-size: 10px;
  border-bottom: 1px solid #C9C9C9;
  @media only screen and (max-width: 978px) {
    padding: 10px 20px;
  }
`;

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Basket = () => {
    return (
        <basket>
            <div className="basket__container">
                <div className="diet">
                    <WhiteBoxDiet>
                        <BasketTitle>
                            <div className="icon-diet"/>
                            <h2>식단</h2>
                            <Spacer/>
                            <div className="plus"><MdAdd/></div>
                        </BasketTitle>
                    </WhiteBoxDiet>
                </div>
                <div className="fridge__cards">
                    <div className="ingredient_recommend">
                        <WhiteBoxBasket>
                            <BasketTitle>
                                <h2>이 재료도 추가하시는건 어때요?</h2>
                            </BasketTitle>
                            <IngredientBlock>
                                <BasketRecommendItem/>
                            </IngredientBlock>
                        </WhiteBoxBasket>
                    </div>
                    <div className="shopping_list">
                        <WhiteBoxBasket>
                            <BasketTitle>
                                <h2>장 볼 목록</h2>
                                <Spacer/>
                                <div className="icon-list-check"/>
                                <div className="icon-share"/>
                            </BasketTitle>
                            <IngredientBlock>
                                <BasketShoppingListItem/>
                            </IngredientBlock>
                        </WhiteBoxBasket>
                    </div>
                </div>
            </div>
        </basket>
    );
}

export default Basket;