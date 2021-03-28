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
  overflow-y: auto;
`;

const ItemTitle = styled.div`
  display: flex;
  padding: 10px 30px;
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
`;

const Item = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

const Fridge = () => {
    return (
        <main>
            <div className="fridge__container">
                <div className="shelf_life">
                    <div className="shelf_life__title">
                        <WhiteBoxTop>
                            <div className="top_card_title">
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
                </div>
                <div className="fridge__cards">
                    <WhiteBoxFridge>
                        <div className="card_title">
                            <h2>냉장</h2>
                            <div className="plus">
                                <MdAdd/>
                            </div>
                        </div>
                        <ItemTitle>
                            <Item><div className="text-primary-p">재료명</div></Item>
                            <Item><div className="text-primary-p">갯수</div></Item>
                            <Item><div className="text-primary-p">유통기한</div></Item>
                            <Item><div className="text-primary-p">남은기한</div></Item>
                        </ItemTitle>

                        <IngredientBlock>
                            <FridgeColdItem/>
                        </IngredientBlock>
                    </WhiteBoxFridge>

                    <WhiteBoxFridge>
                        <div className="card_title">
                            <h2>냉동</h2>
                            <div className="plus">
                                <MdAdd/>
                            </div>
                        </div>
                        <ItemTitle>
                            <Item><div className="text-primary-p">재료명</div></Item>
                            <Item><div className="text-primary-p">갯수</div></Item>
                            <Item><div className="text-primary-p">유통기한</div></Item>
                            <Item><div className="text-primary-p">남은기한</div></Item>
                        </ItemTitle>
                    </WhiteBoxFridge>

                    <WhiteBoxFridge>
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <h2>신선</h2>
                            <div className="plus">
                                <MdAdd/>
                            </div>
                        </div>
                        <ItemTitle>
                            <Item><div className="text-primary-p">재료명</div></Item>
                            <Item><div className="text-primary-p">갯수</div></Item>
                            <Item><div className="text-primary-p">유통기한</div></Item>
                            <Item><div className="text-primary-p">남은기한</div></Item>
                        </ItemTitle>
                    </WhiteBoxFridge>

                    <WhiteBoxFridge>
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <h2>실온</h2>
                            <div className="plus">
                                <MdAdd/>
                            </div>
                        </div>
                        <ItemTitle>
                            <Item><div className="text-primary-p">재료명</div></Item>
                            <Item><div className="text-primary-p">갯수</div></Item>
                            <Item><div className="text-primary-p">유통기한</div></Item>
                            <Item><div className="text-primary-p">남은기한</div></Item>
                        </ItemTitle>
                    </WhiteBoxFridge>

                    <WhiteBoxFridge>
                        {/*<img src={ice} alt="ice"/>*/}
                        <div className="card_title">
                            <h2>조미료/양념</h2>
                            <div className="plus">
                                <MdAdd/>
                            </div>
                        </div>
                        <ItemTitle>
                            <Item><div className="text-primary-p">재료명</div></Item>
                            <Item><div className="text-primary-p">갯수</div></Item>
                            <Item><div className="text-primary-p">유통기한</div></Item>
                            <Item><div className="text-primary-p">남은기한</div></Item>
                        </ItemTitle>
                    </WhiteBoxFridge>
                </div>
            </div>
        </main>
    );
}

export default Fridge;