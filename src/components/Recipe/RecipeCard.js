import "./Recipe.css";
import WhiteBox from "../common/WhiteBox"
import styled from 'styled-components';
import TagBox from './TagBox';
import {MdSearch} from 'react-icons/md';
import RecipeModal from "./recipPopUp/RecipeModal"
import React, {useState, useCallback} from 'react';
// import ice from "../../assets/ice.svg";

const StyledWhiteBox = styled(WhiteBox)`
  height: auto;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
  cursor: pointer;
  &:hover{
    border: 2px dashed #bcbcbc;
  }
`;
const TextBlock = styled.div`
  margin: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Box4 = styled.div`
  padding: 10px;
  margin-top: 1px;
  height: 60px;
  width: 96%;
  flex: 1;

  font-weight: 500;
  color: #000000;
  font-size: 13px;
  @media only screen and (max-width: 978px) {
    font-size: 11px;
  }
`;

const HasItem = styled.span`
  color: #3c82d9;
`;
const NoneItem = styled.span`
  color: #D93C3C;
`;

const OriImg = styled.img`
  width: 160px;
  border-radius: 10px;
`;
const ItemTitle = styled.div`
  display: block; //내용이 칸 넘어가면 자동으로 줄바꿈
  margin-left: 5px;
  padding-bottom: 8px;
  font-size: 15px;
  font-weight: 700;
  border-bottom: 1px dashed #bbb;
  @media only screen and (max-width: 978px) {
    font-size: 13px;
  }
`;

const RecipeCard = (props) => {
  const [modal, setModal] = useState(false);
  const onAddClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    // onAdd();
  }
  const popUp = () => {
    onAddClick();
  }
  return (
    <>
      <StyledWhiteBox onClick={popUp}>
        <div className="card_inner">
          <OriImg src={props.thumbnail} alt="No Image"/>
          <TextBlock>
            <ItemTitle>{props.name}</ItemTitle>
            <Box4>
              <HasItem>냉장고 속 재료 │</HasItem> {props.hasList.map((n, _i) => {
              return n + (_i < props.hasList.length - 1 ? ',' : '')
            })}
              <br></br>
              <NoneItem>없는 재료 │</NoneItem> {props.noneList.map((n, _i) => {
              return n + (_i < props.noneList.length - 1 ? ',' : '')
            })}
            </Box4>
          </TextBlock>
        </div>
      </StyledWhiteBox>
      <RecipeModal
        thumbnail={props.thumbnail}
        url={props.url}
        description={props.description}
        name={props.name}
        hasList={props.inRefIngredients}
        noneList={props.notInRefIngredients}
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );

};

export default RecipeCard;