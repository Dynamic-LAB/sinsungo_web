import "./Fridge.css";
import WhiteBox from "../common/WhiteBox";
import styled from 'styled-components';
import React, {useCallback, useEffect, useState,useContext} from "react";
import FridgeList from "./FridgeList";
import FridgeAddButton from "./FridgeAddButton";
import GetIngredientByRefrigratorId from "../ForServer/GetIngredientByRefrigratorId";
import axios from 'axios';
import {Context} from '../../Ingredient'
//import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

//유통기한 임박 재료 박스
const WhiteBoxTop = styled(WhiteBox)`
  height: auto;
`;
//냉장고 칸 박스
const WhiteBoxFridge = styled(WhiteBox)`
  height: 400px
`;
//음식재료 틀
const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;
//보관상태 빨간색
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
//보관상태 노란색
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
  padding: 10px 35px;
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
  font-weight: 700;
  color: #393939;
  font-size: 12px;
  @media only screen and (min-width:976px) and (max-width: 1500px) {
    padding: 10px 10px;
    font-size: 10px;
  }
  @media only screen and (max-width: 630px) {
    padding: 10px 15px;
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


const DeleteIngredientById=(id)=>{
  axios.delete("/refrigerator/ingredient/"+id, {
    params: {
    }
  })
  .then((response)=> {
    console.log("삭제됨:",response);
    }).catch((error)=>{
      // 오류발생시 실행
  }).then(()=> {
      // 항상 실행
  });
  //props.setIngredients()

}
const Fridge = (props) => {
  const [ingredients,setIngredients] = useState();

  const {
    state,
    dispatch,
  } = useContext(Context);
  useEffect(()=>{
    if(JSON.parse(sessionStorage.getItem('User'))){
    GetIngredientByRefrigratorId(
      {
          id:JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch:dispatch
      }
    )};
  },[])
  
 //지우기 기능
  const onRemove = useCallback(
    id => {
      DeleteIngredientById(id);
      if(JSON.parse(sessionStorage.getItem('User'))){
        GetIngredientByRefrigratorId(
          {
              id:JSON.parse(sessionStorage.getItem('User')).newRefId,
              dispatch:dispatch
          }
        )};
    }
  );
  const GetExpirationList=()=>{
    var cnt=0;
    if(state.IngredientList){
      state.IngredientList.map(item=>{
      if(item.expiration_type==="유통기한"){
        cnt++;
        var day=new Date(item.today);
        var myDate=(new Date(day.getFullYear()+"/"+(day.getMonth()+1)+"/"+day.getDate())-new Date(item.expiration_date.replaceAll('-','/')))/24/3600/1000*-1;
      }
    })
  }
  console.log(cnt);
    return cnt==0?"-":cnt;
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
              {state.IngredientList?state.IngredientList.map((item,index)=>{
                if(item.expiration_type==="유통기한"){
                  var day=new Date(item.today);
                  var myDate=(new Date(day.getFullYear()+"/"+(day.getMonth()+1)+"/"+day.getDate())-new Date(item.expiration_date.replaceAll('-','/')))/24/3600/1000*-1;
                  if(myDate<4){
                  return(<Shelf_Red key={index}>{item.name}({myDate})</Shelf_Red>)
                  }else if(myDate<8)
                  return(<Shelf_Yellow key={index}>{item.name}({myDate})</Shelf_Yellow>)
                }
              }):
                null}
              {/*<Shelf_Yellow>음식2</Shelf_Yellow>*/}
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
            <FridgeList onRemove={onRemove} type="조미료/양념" />
            </IngredientBlock>
          </WhiteBoxFridge>
        </div>
      </div>
    </div>
  );
}

export default Fridge;