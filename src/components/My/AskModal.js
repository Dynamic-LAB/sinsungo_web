import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

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

  h2 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 3rem;
  }

  .modal_buttons {
    display: flex;
    justify-content: flex-end;
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

const AskModal = (
  {
    history,
    location,
    visible,
    cancelText = '취소',
    withdrawalText = '탈퇴',
    onCancel,
    onWithdrawal
  }
) => {
  console.log(history,location)
  if (!visible) return null;

  return (
    <Fullscreen>
      <ModalBlock>
        <h2>회원탈퇴</h2>
        <p>정말로 탈퇴하겠습니까? 정말로????</p>
        {/*취소, 확인 버튼*/}
        <div className="modal_buttons">
          <StyledButton inverted={true} onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton blueBtn onClick={onWithdrawal}>{withdrawalText}</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
}

export default AskModal;