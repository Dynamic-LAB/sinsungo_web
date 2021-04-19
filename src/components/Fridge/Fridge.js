import "./Fridge.css";
import WhiteBox from "../common/WhiteBox";
import styled from 'styled-components';
import React from "react";
import ColdAddButton from "./Cold/ColdAddButton";
import FreezeAddButton from "./Freeze/FreezeAddButton";
import FreshAddButton from "./Fresh/FreshAddButton";
import RoomTempAddButton from "./RoomTemp/RoomTempAddButton";
import SeasoningAddButton from "./Seasoning/SeasoningAddButton";
import FridgeItem from "./FridgeItem";

const WhiteBoxTop = styled(WhiteBox)`
  height: auto;
`;

const WhiteBoxFridge = styled(WhiteBox)`
  height: 400px
`;

const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;
const Shelf_Red = styled.div`
  margin-right: 10px;
  padding: 0 10px 2px 10px;
  border-radius: 20px;
  align-items: center;
  color: white;
  font-size: 12px;
  background: #FF6767;
  @media only screen and (max-width: 978px) {
    font-size: 10px;
  }
`;
const Shelf_Yellow = styled.div`
  margin-right: 10px;
  padding: 0 10px 2px 10px;
  border-radius: 20px;
  align-items: center;
  color: white;
  font-size: 12px;
  background: #FFD167;
  @media only screen and (max-width: 978px) {
    font-size: 10px;
  }
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
              <Shelf_Red>음식1</Shelf_Red>
              <Shelf_Yellow>음식2</Shelf_Yellow>
            </div>
          </WhiteBoxTop>
        </div>
        <div className="fridge__cards">
          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-cold"/>
              <h2>냉장</h2>
              <Spacer/>
              <ColdAddButton type="cold"/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeItem
                name="재료재료재료"
                count="2"
                date="2021.04.01"
                deadline="4일"
              />
              <FridgeItem
                name="재료재료재료"
                count="2"
                date="2021.04.01"
                deadline="4일"
              />
              <FridgeItem
                name="재료재료재료"
                count="2"
                date="2021.04.01"
                deadline="4일"
              />
            </IngredientBlock>
          </WhiteBoxFridge>

          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-ice"/>
              <h2>냉동</h2>
              <Spacer/>
              <FreezeAddButton/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeItem
                name="재료재료재료"
                count="2"
                date="2021.04.01"
                deadline="4일"
              />
            </IngredientBlock>
          </WhiteBoxFridge>

          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-fresh"/>
              <h2>신선</h2>
              <Spacer/>
              <FreshAddButton/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeItem
                name="재료재료재료"
                count="2"
                date="2021.04.01"
                deadline="4일"
              />
            </IngredientBlock>
          </WhiteBoxFridge>

          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-room-temperature"/>
              <h2>상온</h2>
              <Spacer/>
              <RoomTempAddButton/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeItem
                name="재료재료재료"
                count="2"
                date="2021.04.01"
                deadline="4일"
              />
            </IngredientBlock>
          </WhiteBoxFridge>

          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-seasoning"/>
              <h2>조미료/양념</h2>
              <Spacer/>
              <SeasoningAddButton/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeItem
                name="재료재료재료"
                count="2"
                date="2021.04.01"
                deadline="4일"
              />
            </IngredientBlock>
          </WhiteBoxFridge>
        </div>
      </div>
    </frigde>
  );
}

export default Fridge;