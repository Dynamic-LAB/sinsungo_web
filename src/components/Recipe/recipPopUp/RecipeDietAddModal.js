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
                              onClose,
                              name
                            }) => {
  const [newOpen, setNewOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const isChecked=useRef([]);
  //????????? ?????? ??????
  const newAdd = () => {
    setNewOpen(true);
  }
  //?????? ????????? ??????
  const openList = () => {
    setListOpen(true);
  };
  //?????? ?????? ????????? ?????? ??????
  const onListClose = () => {
    setListOpen(false);
  };
  //?????? ??????
  const totalClose = () => {
    onClose(); //????????? ???????????? ??????
    onCloseClick(); //????????????????????? ????????? ??????
  };
  //??????, ?????? ??????
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
          <h2>?????????<span className="text_blue">??????</span>??????</h2>
          <Spacer/>
          <CloseButton onClick={onCloseClick}>
            <MdClose/>
          </CloseButton>
        </ModalTitle>
        <div className="modal_contents">
          <ButtonBlock>
            <StyledButton onClick={newAdd}>????????? ????????? ??????</StyledButton>
          </ButtonBlock>
          <ButtonBlock>
            <StyledButton onClick={openList}>?????? ????????? ??????</StyledButton>
          </ButtonBlock>
        </div>
        <DietModal
          visible={newOpen}
          onConfirm={onConfirm}
          onCancel={onCancel}
          type="add"
          isChecked={isChecked}
          recipeName={name} 
        />
        <RecipeDietListModal
          visible={listOpen}
          onListClose={onListClose}
          totalClose={totalClose}
          recipeName={name} 
        />
      </ModalBlock>
    </Fullscreen>
  );
}

export default RecipeDietAddModal;