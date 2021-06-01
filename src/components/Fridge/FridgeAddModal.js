import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import {MdClose} from "react-icons/md";
import Button from "../common/Button";
import FridgeModal from "./FridgeModal";
import GetIngredientByRefrigratorId from "../ForServer/GetIngredientByRefrigratorId"
import { Context } from '../../Ingredient';
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
  width: 250px;
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
//type 지정
const textMap = {
  cold: '냉장',
  freeze: '냉동',
  fresh: '신선',
  temp: '실온',
  seasoning: '조미료/양념',
};

const FridgeAddModal = ({
                        visible,
                        onCloseClick,
                        type
                      }) => {
  const text = textMap[type];
  const [modal, setModal] = useState(false);

  //todo: 사진업로그 기능 구현 해야함

  //직접추가 버튼 액션
  const onAddClick = () => {
    setModal(true);
  };
  //취소 버튼 액션
  const onCancel = () => {
    onCloseClick();
    setModal(false);
  };
  //확인 버튼 액션
  const {state,dispatch}=useContext(Context);
  const onConfirm = () => {
    if(JSON.parse(sessionStorage.getItem('User'))){
      GetIngredientByRefrigratorId(
        {
            id:JSON.parse(sessionStorage.getItem('User')).newRefId,
            dispatch:dispatch
        }
      )};
    onCloseClick();
    setModal(false);
  }

  if (!visible) return null;

  return (
    <Fullscreen>
      <ModalBlock>
        <ModalTitle>
          <h2>{text} 재료 <span className="text_blue">추가</span></h2>
          <Spacer/>
          <CloseButton onClick={onCloseClick}>
            <MdClose/>
          </CloseButton>
        </ModalTitle>
        <div className="modal_contents">
          {/*<ButtonBlock>*/}
          {/*  <StyledButton>사진 업로드</StyledButton>*/}
          {/*</ButtonBlock>*/}

          <ButtonBlock>
            <StyledButton onClick={onAddClick}>직접 추가</StyledButton>
            {type==='cold' &&(
              <FridgeModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
                type="cold"
              />
            )}
            {type==='freeze' &&(
              <FridgeModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
                type="freeze"
              />
            )}
            {type==='fresh' &&(
              <FridgeModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
                type="fresh"
              />
            )}
            {type==='temp' &&(
              <FridgeModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
                type="temp"
              />
            )}
            {type==='seasoning' &&(
              <FridgeModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
                type="seasoning"
              />
            )}

          </ButtonBlock>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
}

export default FridgeAddModal;