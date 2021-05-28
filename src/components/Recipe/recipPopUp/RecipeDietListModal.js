import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {MdClose} from "react-icons/md";
import RecipeDietDateItem from "./RecipeDietDateItem";
import {useDietDispatch,useDietState} from "../../Basket/Diet/DietContext";
import GetDietByRefrigratorId from "../../ForServer/GetDietByRefrigratorId"
import GetIngredientByRefrigratorId from "../../ForServer/GetIngredientByRefrigratorId"

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBlock = styled.div`
  background: #F6F6F6;
  height: auto;
  width: 300px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  .modal_contents {
    text-align: center;
  }
  @media only screen and (max-width: 370px) {
    width: 250px;
  }
`;
const ModalTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
  h2 {
    font-size: 1.325rem;
    margin-top: 0;
  }
  .text_blue {
    color: #5887F9;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`;
const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;
const DateBlock = styled.div`
  overflow-y: auto; //스크롤
  height: 200px;
`;

const RecipeDietListModal = ({visible, onListClose, totalClose}) => {
  const dispatchDiet=useDietDispatch();
useEffect(()=>{
  if(JSON.parse(sessionStorage.getItem('User'))){
  GetDietByRefrigratorId(
      {
          id:JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch:dispatchDiet
      }
    )
  };
  },[]) 
  const finalClose = () => {
    onListClose();
    totalClose();
  };
  useEffect(()=>{


  })
  const dietState=useDietState();
  if (!visible) return null;

  return(
    <Fullscreen>
      <ModalBlock>
        <ModalTitle>
          <h2>기존 식단 <span className="text_blue">선택</span></h2>
          <Spacer/>
          <CloseButton onClick={onListClose}>
            <MdClose/>
          </CloseButton>
        </ModalTitle>
        <DateBlock>
          <div>{dietState?dietState.map((item,index)=>{
            return <RecipeDietDateItem diet={item} key={item.id} finalClose={finalClose}/>}):"No data"} </div>
          
          {/*dates.map(date => (
            <RecipeDietDateItem diet={useD} date={date} key={date.id} finalClose={finalClose}/>
          ))*/}
        </DateBlock>
      </ModalBlock>
    </Fullscreen>
  );
};

export default RecipeDietListModal;