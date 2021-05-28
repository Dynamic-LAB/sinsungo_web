import React, {useState,useRef} from 'react';
import styled from 'styled-components';
import {MdClose} from "react-icons/md";
import Button from "../../common/Button";
import FridgeModal from "../../Fridge/FridgeModal";
import DietModal from "../../Basket/Diet/DietModal";
import RecipeDietListModal from "./RecipeDietListModal";

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
const ButtonBlock = styled.div`
  align-items: center;
  justify-content: center;
`;
const StyledButton = styled(Button)`
  height: 2.5rem;
  width: 10rem;
  border-radius: 20px;
  font-size: 0.75rem;
  padding: 0.25rem 1.25rem;
  background: none;
  border: 2px solid #3C82D9;
  color: #3C82D9;
  margin: 8px;
  font-weight: 700;
  transition: .2s;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
    background: #3C82D9;
    color: #ffffff;
  }
`;

const RecipeDietAddModal = ({
                              visible,
                              onCloseClick,
                              onClose
                            }) => {
  const [newOpen, setNewOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const isChecked=useRef([]);
  //새로운 식단 추가
  const newAdd = () => {
    setNewOpen(true);
  }
  //기존 식단에 추가
  const openList = () => {
    setListOpen(true);
  };
  //기존 식단 리스트 팝업 닫기
  const onListClose = () => {
    setListOpen(false);
  };
  //모두 닫기
  const totalClose = () => {
    onClose(); //레시피 상세보기 닫기
    onCloseClick(); //레시피추가하기 팝업창 닫기
  };
  //확인, 취소 버튼
  const onConfirm = () => {
    setNewOpen(false);
    totalClose();
  };
  const onCancel = () => {
    setNewOpen(false);
    totalClose();
  };

  if (!visible) return null;
  return (
    <Fullscreen>
      <ModalBlock>
        <ModalTitle>
          <h2>레시피 <span className="text_blue">추가</span>하기</h2>
          <Spacer/>
          <CloseButton onClick={onCloseClick}>
            <MdClose/>
          </CloseButton>
        </ModalTitle>
        <div className="modal_contents">
          <ButtonBlock>
            <StyledButton onClick={newAdd}>새로운 식단에 추가</StyledButton>
          </ButtonBlock>
          <ButtonBlock>
            <StyledButton onClick={openList}>기존 식단에 추가</StyledButton>
          </ButtonBlock>
        </div>
        <DietModal
          visible={newOpen}
          onConfirm={onConfirm}
          onCancel={onCancel}
          type="add"
          isChecked={isChecked}
        />
        <RecipeDietListModal
          visible={listOpen}
          onListClose={onListClose}
          totalClose={totalClose}
        />
      </ModalBlock>
    </Fullscreen>
  );
}

export default RecipeDietAddModal;