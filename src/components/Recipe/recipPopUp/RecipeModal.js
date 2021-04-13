import React from 'react';
import Modal from "../../common/Modal";
import styled from "styled-components";
import Button from "../../common/Button";
import WhiteBox from "../../common/WhiteBox";
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
  width: 350px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);

  h2 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .modal_buttons {
    display: flex;
    justify-content: flex-end;
  }

`;

const StyledWhiteBox = styled(WhiteBox)`
  height: 250px;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 15px ;
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


const RecipeModal  = ({ props,visible,
    confirmText = '확인',
    cancelText = '취소',
    title,
    onConfirm,
    onCancel,}) => {
if (!visible) return null;
return(
<Fullscreen>
  <ModalBlock>
    <h2>{title}</h2>
    <StyledWhiteBox/>
    <div className="modal_buttons">
    <StyledButton inverted={true}
          onClick={onCancel}>{cancelText}</StyledButton>
    <StyledButton blueBtn
          onClick={onConfirm}>{confirmText}</StyledButton>
    </div>
  </ModalBlock>
</Fullscreen>

);
};

export default RecipeModal;