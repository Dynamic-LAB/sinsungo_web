import React from 'react';
import styled from "styled-components";
import welcomeImg from '../../assets/welcome.png';

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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  .button_block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .welcome {
    margin-bottom: 25px;
  }
`;
const ModalTitle = styled.div`
  display: flex;
  margin-bottom: 10px;

  h2 {
    font-size: 1.5rem;
    margin-top: 0;
  }
`;
const StyledButton = styled.button`
  text-align: center;
  width: 150px;
  height: 40px;
  outline: none;
  background: none;
  border: 2px solid #3C82D9;
  color: #3C82D9;
  border-radius: 10px;
  font-size: 13px;
  padding: 0.25rem 1.25rem;
  margin: 10px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  transition: .2s;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
    background: #3C82D9;
    color: #ffffff;
  }
`;
const StartModal = ({visible,}) => {

  if (!visible) return null;
  return(
    <Fullscreen>
      <ModalBlock>
        <ModalTitle>
          <h2>신선고 시작하기</h2>
        </ModalTitle>
        <img className="welcome" src={welcomeImg} alt="시작이미지"/>
        <div className="button_block">
          <StyledButton>초대코드 입력하기</StyledButton>
          <StyledButton>시작하기</StyledButton>
        </div>

      </ModalBlock>
    </Fullscreen>
  );
}

export default StartModal;