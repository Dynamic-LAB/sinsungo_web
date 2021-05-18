import React, {useState} from 'react';
import styled from 'styled-components';
import {MdClose} from "react-icons/md";
import Button from "../../common/Button";
import FridgeModal from "../../Fridge/FridgeModal";

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
  background: #3c82d9;
  margin: 8px;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
  }
`;

const RecipeDietAddModal = ({
                              visible,
                              onCloseClick,
                            }) => {
  //const [open, setOpen] = useState(false);
  //식단추가

  //식단 수정

  if (!visible) return null;
  return (
    <Fullscreen>
      <ModalBlock>
        <ModalTitle>
          <h2>레시피를 식단에 <span className="text_blue">추가</span>하기</h2>
          <Spacer/>
          <CloseButton onClick={onCloseClick}>
            <MdClose/>
          </CloseButton>
        </ModalTitle>
        <div className="modal_contents">
          <ButtonBlock>
            <StyledButton>새로운 식단에 추가</StyledButton>
          </ButtonBlock>
          <ButtonBlock>
            <StyledButton>기존 식단에 추가</StyledButton>
          </ButtonBlock>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
}

export default RecipeDietAddModal;