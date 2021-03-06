import "./Fridge.css";
import WhiteBox from "../common/WhiteBox";
import styled from 'styled-components';
import React, {useCallback, useEffect, useState, useContext} from "react";
import FridgeList from "./FridgeList";
import FridgeAddButton from "./FridgeAddButton";
import GetIngredientByRefrigratorId from "../ForServer/GetIngredientByRefrigratorId";
import { MdAndroid } from "react-icons/md";
import axios from 'axios';
import {Context} from '../../Ingredient'
import Footer from "../common/Footer";


const WhiteBoxTop = styled(WhiteBox)`
  height: auto;
  padding: 0 5px;
`;
const WhiteBoxFridge = styled(WhiteBox)`
  height: 400px
`;
const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;
//보관상태 빨간색
const Shelf_Red = styled.div`
  display: flex;
  height: 100%;
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  color: white;
  background: #FF6767;
`;
//보관상태 노란색
const Shelf_Yellow = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  margin-right: 5px;
  padding: 5px;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  background: #FFD167;
  
`;
const TextBlock = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 70px;
  font-size: 12px;
  padding: 0 5px;
  @media only screen and (max-width: 978px) {
    width: 55px;
    font-size: 10px;
  }
`;

const ItemTitle = styled.div`
  display: flex;
  padding: 10px 40px;
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
  font-weight: 700;
  color: #393939;
  font-size: 12px;
  @media only screen and (min-width: 976px) and (max-width: 1500px) {
    padding: 10px 30px;
    font-size: 10px;
  }
  @media only screen and (max-width: 630px) {
    padding: 10px 25px;
    font-size: 10px;
  }
`;
const Item = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
`;
//간격띄우기
const Spacer = styled.div`
  flex-grow: 1;
`;

const Fridge = (props) => {

  const {
    state,
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('User'))) {
      GetIngredientByRefrigratorId(
        {
          id: JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch: dispatch
        }
      )
    }
  }, [])
  const DeleteIngredientById = (id) => {
    axios.delete(" refrigerator/ingredient/" + id, {
      params: {}
    })
      .then((response) => {
        console.log("삭제됨:", response);
        if (JSON.parse(sessionStorage.getItem('User'))) {
          GetIngredientByRefrigratorId(
            {
              id: JSON.parse(sessionStorage.getItem('User')).newRefId,
              dispatch: dispatch
            }
          )
        }
      }).catch((error) => {
      // 오류발생시 실행
    }).then(() => {
      // 항상 실행
    });
    //props.setIngredients()
  }
  //지우기 기능
  const onRemove = useCallback(
    id => {
      DeleteIngredientById(id);
    }
  );
  const GetExpirationList = () => {
    var cnt = 0;
    if (state.IngredientList) {
      state.IngredientList.map(item => {
        if (item.expiration_type === "유통기한") {
          var day = new Date(item.today);
          var myDate = (new Date(day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate()) - new Date(item.expiration_date.replaceAll('-', '/'))) / 24 / 3600 / 1000 * -1;
          if (myDate < 4) {
            cnt++
          }else if(myDate<8){
            cnt++
          }
        }
      })
    }
    return cnt === 0 ? "-" : cnt;
  }
  return (
    <div id="mainTag">
      <div className="fridge__container">
        <div className="shelf_life">
          <WhiteBoxTop>
            <div className="shelf_life__title">
              <h2>유통기한 임박 재료</h2>
              <div className="count">
                <h3>{GetExpirationList()}</h3>
              </div>
            </div>
            <div className="top_card_inner">
              {state.IngredientList ? state.IngredientList.map((item, index) => {
                  if (item.expiration_type === "유통기한") {
                    var day = new Date(item.today);
                    var myDate = (new Date(day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate()) - new Date(item.expiration_date.replaceAll('-', '/'))) / 24 / 3600 / 1000 * -1;
                    if (myDate < 4) {
                      return (<Shelf_Red key={index}>
                        <TextBlock>
                          {item.name}({myDate})
                        </TextBlock>
                      </Shelf_Red>)
                    } else if (myDate < 8)
                      return (<Shelf_Yellow key={index}>
                        <TextBlock>
                          {item.name}({myDate})
                        </TextBlock>
                      </Shelf_Yellow>)
                  }
                }) : null}
            </div>
          </WhiteBoxTop>
        </div>
        <div className="fridge__cards">
          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-cold"/>
              <h2>냉장</h2>
              <Spacer/>
              <FridgeAddButton type="cold"/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한(D-day)</Item>
              <Item>제조일자</Item>
              <Item>보관일</Item>
            </ItemTitle>
            <IngredientBlock>
              {/*재료*/}
              <FridgeList onRemove={onRemove} type="냉장"/>
            </IngredientBlock>
          </WhiteBoxFridge>

          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-ice"/>
              <h2>냉동</h2>
              <Spacer/>
              <FridgeAddButton type="freeze"/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한(D-day)</Item>
              <Item>제조일자</Item>
              <Item>보관일</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeList onRemove={onRemove} type="냉동"/>
            </IngredientBlock>
          </WhiteBoxFridge>

          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-fresh"/>
              <h2>신선</h2>
              <Spacer/>
              <FridgeAddButton type="fresh"/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한(D-day)</Item>
              <Item>제조일자</Item>
              <Item>보관일</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeList onRemove={onRemove} type="신선"/>
            </IngredientBlock>
          </WhiteBoxFridge>

          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-room-temperature"/>
              <h2>상온</h2>
              <Spacer/>
              <FridgeAddButton type="temp"/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한(D-day)</Item>
              <Item>제조일자</Item>
              <Item>보관일</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeList onRemove={onRemove} type="상온"/>
            </IngredientBlock>
          </WhiteBoxFridge>

          <WhiteBoxFridge>
            <div className="fridge__card_title">
              <div className="icon-seasoning"/>
              <h2>조미료/양념</h2>
              <Spacer/>
              <FridgeAddButton type="seasoning"/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한(D-day)</Item>
              <Item>제조일자</Item>
              <Item>보관일</Item>
            </ItemTitle>
            <IngredientBlock>
              <FridgeList onRemove={onRemove} type="조미료/양념"/>
            </IngredientBlock>
          </WhiteBoxFridge>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default Fridge;