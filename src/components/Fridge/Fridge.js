import "./Fridge.css";
import FridgeColdItem from "./FridgeColdItem";
import WhiteBox from "../common/WhiteBox";
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import React from "react";

const WhiteBoxTop = styled(WhiteBox)`
  height: auto;
`;

const WhiteBoxFridge = styled(WhiteBox)`
  height: 400px
`;

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const ItemTitle = styled.div`
  display: flex;
  padding: 10px 30px;
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
  @media only screen and (max-width: 978px) {
    padding: 10px 20px;
  }
`;

const Item = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #393939;
  font-size: 13px;
  @media only screen and (max-width: 978px) {
    font-size: 11px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Fridge = () => {
    return (
        <frigde>
            <div className="fridge__container">
                <div className="shelf_life">
                    <WhiteBoxTop>
                        <div className="shelf_life__title">
                            <h2>유통기한 임박 재료</h2>
                            <div className="count">
                                <h3>3</h3>
                            </div>
                        </div>
                        <div className="top_card_inner">
                            <p className="text-primary-p">음식1</p>
                        </div>
                    </WhiteBoxTop>
                </div>
                <div className="fridge__cards">
                    <WhiteBoxFridge>
                        <div className="fridge__card_title">
                            <div className="icon-cold"/>
                            <h2>냉장</h2>
                            <Spacer/>
                            <div className="plus"><MdAdd/></div>
                        </div>
                        <ItemTitle>
                            <Item>재료명</Item>
                            <Item>갯수</Item>
                            <Item>유통기한</Item>
                            <Item>남은기한</Item>
                        </ItemTitle>
                        <IngredientBlock>
                            <FridgeColdItem/>
                        </IngredientBlock>
                    </WhiteBoxFridge>

                    <WhiteBoxFridge>
                        <div className="fridge__card_title">
                            <div className="icon-ice"/>
                            <h2>냉동</h2>
                            <Spacer/>
                            <div className="plus"><MdAdd/></div>
                        </div>
                        <ItemTitle>
                            <Item>재료명</Item>
                            <Item>갯수</Item>
                            <Item>유통기한</Item>
                            <Item>남은기한</Item>
                        </ItemTitle>
                    </WhiteBoxFridge>

                    <WhiteBoxFridge>
                        <div className="fridge__card_title">
                            <div className="icon-fresh"/>
                            <h2>신선</h2>
                            <Spacer/>
                            <div className="plus"><MdAdd/></div>
                        </div>
                        <ItemTitle>
                            <Item>재료명</Item>
                            <Item>갯수</Item>
                            <Item>유통기한</Item>
                            <Item>남은기한</Item>
                        </ItemTitle>
                    </WhiteBoxFridge>

                    <WhiteBoxFridge>
                        <div className="fridge__card_title">
                            <div className="icon-room-temperature"/>
                            <h2>상온</h2>
                            <Spacer/>
                            <div className="plus"><MdAdd/></div>
                        </div>
                        <ItemTitle>
                            <Item>재료명</Item>
                            <Item>갯수</Item>
                            <Item>유통기한</Item>
                            <Item>남은기한</Item>
                        </ItemTitle>
                    </WhiteBoxFridge>

                    <WhiteBoxFridge>
                        <div className="fridge__card_title">
                            <div className="icon-seasoning"/>
                            <h2>조미료/양념</h2>
                            <Spacer/>
                            <div className="plus"><MdAdd/></div>
                        </div>
                        <ItemTitle>
                            <Item>재료명</Item>
                            <Item>갯수</Item>
                            <Item>유통기한</Item>
                            <Item>남은기한</Item>
                        </ItemTitle>
                    </WhiteBoxFridge>
                </div>
            </div>
        </frigde>
    );
}

export default Fridge;