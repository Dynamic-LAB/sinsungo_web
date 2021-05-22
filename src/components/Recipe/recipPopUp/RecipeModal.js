import React, {useState} from 'react';
import styled from "styled-components";
import Button from "../../common/Button";
import WhiteBox from "../../common/WhiteBox";
import RecipeDietAddModal from "./RecipeDietAddModal";
import recipe_img from "../../../assets/recipe_img.png";
import {MdClose} from "react-icons/md";

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
  width: 500px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  .modal_buttons {
    display: flex;
    justify-content: center;
  }
 
`;
const ModalTitle = styled.div`
  display: flex;
  h2 {
    font-size: 1.325rem;
    margin-top: 0;
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
const StyledWhiteBox = styled(WhiteBox)`
  height: 80%;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 15px;
`;
const Thumbnail = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  .recipe__name {
    margin: 10px 0;
  }
`;
const Description = styled.div`
  overflow: scroll;
  height: 120px;
  border-radius: 10px;
  text-overflow: ellipsis;
  margin-top: 5px;
  border: 1px dashed #bbb;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 13px;
`;
const Ingredient = styled.div`
  padding: 10px;
  margin-top: 1px;
  height: 60px;
  width: 96%;
  flex: 1;
  color: #000000;
  font-size: 12px;
  .indent_text {
    padding-left: 10px;
  }
`;
const StyledButton = styled(Button)`
  text-align: center;
  height: 2rem;
  border-radius: 20px;
  font-size: 13px;
  padding: 0.25rem 1.25rem;
  width: 230px;
  img {
    position: relative;
    top: 3px;
    right: 15px;
    width: 17px;
  }
  & + & {
    margin-left: 1.5rem;
  }
`;
const HasItem = styled.span`
  color: #3c82d9;
  font-size: 13px;
  font-weight: 500;
`;
const NoneItem = styled.span`
  color: #D93C3C;
  font-size: 13px;
  font-weight: 500;
`;
const RecipeModal = ({
                       name,
                       description,
                       thumbnail,
                       url,
                       visible,
                       confirmText = '식단추가',
                       moveText = '레시피보기',
                       onCancel, hasList, noneList
                     }) => {

//레시피에서 식단추가를 위한 팝업창 상태변화
  const [open, setOpen] = useState(false);
  //식단추가 액션
  const onAddClick = () => {
    setOpen(true);
  };
  const onCloseClick = () => {
    setOpen(false);
  }
  if (!visible) return null;
  return (
    <>
      <Fullscreen>
        <ModalBlock>
          <ModalTitle>
            <h2>레시피 상세보기</h2>
            <Spacer/>
            <CloseButton onClick={onCancel}>
              <MdClose/>
            </CloseButton>
          </ModalTitle>

          <StyledWhiteBox>
            <Thumbnail>
              <img src={thumbnail} alt="No Image" style={{'width': '200px'}}/>
              <div className="recipe__name">{name}</div>
            </Thumbnail>
            <Description>
              {description}
            </Description>
            <Ingredient>
              {/*재료넣기*/}
              <div>
                <HasItem>냉장고 속 재료</HasItem>
                <div className="indent_text">{hasList.map((n, _i) => {
                  return n + (_i < hasList.length - 1 ? ', ' : '') })}</div>
              </div>
              <br/>
              <div>
                <NoneItem>없는 재료</NoneItem>
                <div className="indent_text">{noneList.map((n, _i) => {
                  return n + (_i < noneList.length - 1 ? ', ' : '') })}</div>
              </div>
            </Ingredient>
          </StyledWhiteBox>

          <div className="modal_buttons">
            <StyledButton recipeAddBtn onClick={onAddClick}>{confirmText}</StyledButton>
            <StyledButton recipeBtn onClick={() => {
              window.open(url, '_blank')
            }}>
              <img src={recipe_img} alt="우리의식탁"/>
              {moveText}
            </StyledButton>
          </div>

        </ModalBlock>
      </Fullscreen>
      {/*식단추가 누르면 나오는 팝업*/}
      <RecipeDietAddModal
        visible={open}
        onCloseClick={onCloseClick}
        onClose={onCancel}
      />
    </>
  );
};

export default RecipeModal;
