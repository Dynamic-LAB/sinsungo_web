import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import {MdStar, MdStarBorder, MdStarHalf} from "react-icons/md";
import Rating from "react-rating";

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
  width: 400px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  @media only screen and (max-width: 470px) {
    width: 300px;
  }
  @media only screen and (max-width: 370px) {
    width: 250px; 
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .text_blue {
    color: #3C82D9;
  }
  .modal_buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`;
const ListBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
  .rating {
    color: #3C82D9;
    font-size: 9px;
    margin-right: 10px;
    @media only screen and (max-width: 500px) {
      font-size: 7px;
      margin-right: 2px;
    }
    @media only screen and (max-width: 370px) {
      font-size: 6px;
      margin-right: 0;
    }
  }
  .text {
    display: flex;
    font-size: 13px;
    text-align: center;
    @media only screen and (max-width: 500px) {
      font-size: 11px;
    }
    @media only screen and (max-width: 370px) {
      font-size: 10px;
    }
  }
  .color_bar {
    width: 3px;
    height: 15px;
    margin: 0 20px;
    background: #3C82D9;
    @media only screen and (max-width: 500px) {
      margin: 0 13px;
    }
    @media only screen and (max-width: 370px) {
      margin: 0 10px;
      width: 2px;
    }
`;
const StyledButton = styled(Button)`
  height: 2rem;
  border-radius: 20px;
  font-size: 0.75rem;
  padding: 0.25rem 1.25rem;

  & + & {
    margin-left: 0.5rem;
  }
`;

const DietRateModal = ({ diet,visible, onCancel, onConfirm }) => {
  let ratings={};
  useEffect(()=>{
  })
  if (!visible) return null;
  return (

    <Fullscreen>
      <ModalBlock>
        <h3><span className="text_blue">메뉴 </span>평가</h3>
        {
          diet.menus.map((item,_i)=>{
            if(item!=null){
            ratings={...ratings,[item]:0};
            return(
              <ListBlock>
              <div className="text">{item}</div>
              <span className="color_bar"/>
              <Spacer/>
              <div className="rating">
                <Rating
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  fractions={2}
                  onChange={(rate) => {ratings={...ratings,[item]:rate};}}
                />
              </div>
            </ListBlock>
            ) 
            }
          })
        }

        <div className="modal_buttons">
          <StyledButton inverted={true} onClick={onCancel}>취소</StyledButton>
          <StyledButton blueBtn onClick={()=>onConfirm(ratings)}>확인</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
};

export default DietRateModal;