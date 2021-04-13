import React from 'react';
import styled from "styled-components";
import { MdFileDownload, MdClose } from "react-icons/md";
import Button from "../../common/Button";

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
`; // 회색 불투명 배경

const ModalBlock = styled.div`
  background: #F6F6F6;
  height: auto;
  width: 450px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  .modal_buttons {
    display: flex;
    justify-content: flex-end; //오른쪽 끝에 배치
  }
`;
const ModalTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
  h2 {
    display: flex;
    font-size: 1.325rem;
    margin-top: 0;
  }
  h2 > div {
    color: #5887F9;
    margin-left: 5px;
  }
  .diet_save_button{
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    margin-right: 15px;
  }
  .diet_close_button{
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`; // 제목 사이 공백
const StyledButton = styled(Button)`
  height: 2rem;
  border-radius: 20px;
  font-size: 0.75rem;
  padding: 0.25rem 1.25rem;

  & + & {
    margin-left: 0.5rem;
  }
`;
const DietModal = ({
                     visible,
                     confirmText = '확인',
                     cancelText = '취소',
                     onConfirm,
                     onCancel,
                     onCloseClick,
                   }) => {
  if (!visible) return null;

  return (
    <Fullscreen>
      <ModalBlock>
        <ModalTitle>
          <h2>
            식단
            <div className="diet_title_blue">추가</div>
          </h2>
          <Spacer/>
          <div className="diet_save_button"><MdFileDownload/></div>
          <div className="diet_close_button" onClick={onCloseClick}><MdClose/></div>
        </ModalTitle>

        <div className="modal_buttons">
          <StyledButton inverted={true}
                        onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton blueBtn
                        onClick={onConfirm}>{confirmText}</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
}
export default DietModal;