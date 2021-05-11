import "./Fridge.css";
import WhiteBox from "../common/WhiteBox";
import styled from 'styled-components';
import React, {useCallback, useEffect, useState} from "react";
import FridgeList from "./FridgeList";
import FridgeAddButton from "./FridgeAddButton";
import GetIngredientByRefrigratorId from "../ForServer/GetIngredientByRefrigratorId";
import axios from 'axios';
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
  padding: 10px 40px 10px 50px ;
  align-items: center;
  border-bottom: 1px solid #bbbbbb;
  font-weight: 700;
  color: #393939;
  font-size: 13px;
  @media only screen and (max-width: 978px) {
    font-size: 11px;
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
  const GetIngredient=(id)=>{
    axios.get("/refrigerator/ingredient/"+id, {
      params: {
        
      }
    })
    .then((response)=> {  
        // response 
        setIngredients(response)
      }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실행
    });
    //props.setIngredients()
  }

  useEffect(()=>{
    if(JSON.parse(sessionStorage.getItem('User')))
    {
    GetIngredient(JSON.parse(sessionStorage.getItem('User')).newRefId)
    }
  },[])

 //지우기 기능
  const onRemove = useCallback(
    id => {
      DeleteIngredientById(id);
      GetIngredient(props.userInfo.newRefId);
    }
   
  );
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
              <FridgeAddButton type="cold"/>
            </div>
            <ItemTitle>
              <Item>재료명</Item>
              <Item>갯수</Item>
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>
              {/*재료*/}
             <FridgeList ingredients={ingredients}  setIngredients={setIngredients} onRemove={onRemove}/>
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
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>

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
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>
                
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
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>

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
              <Item>유통기한</Item>
              <Item>남은기한</Item>
            </ItemTitle>
            <IngredientBlock>

            </IngredientBlock>
          </WhiteBoxFridge>
        </div>
      </div>
    </frigde>
  );
}

export default Fridge;