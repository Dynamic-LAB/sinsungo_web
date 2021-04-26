import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import Button from "../common/Button";
import FridgeModalFrom from "../Fridge/FridgeModalFrom";

// 회색 불투명 배경
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

const StyledButton = styled(Button)`
  height: 2rem;
  border-radius: 20px;
  font-size: 0.75rem;
  padding: 0.25rem 1.25rem;

  & + & {
    margin-left: 0.5rem;
  }
`;
const textMap = {
  cold: '냉장',
  freeze: '냉동',
  fresh: '신선',
  temp: '실온',
  seasoning: '조미료/양념',
  edit: '수정',
};

const FridgeModal = ({
                 visible,
                 type,
                 confirmText = '확인',
                 cancelText = '취소',
                 onConfirm,
                 onCancel,
               }) => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = values => console.log(values);
  if (!visible) return null;
  const text = textMap[type];


  return (
    <Fullscreen>
      <ModalBlock>
        {type==='cold' &&(<h2>{text} 재료 추가</h2>)}
        {type==='freeze' &&(<h2>{text} 재료 추가</h2>)}
        {type==='fresh' &&(<h2>{text} 재료 추가</h2>)}
        {type==='temp' &&(<h2>{text} 재료 추가</h2>)}
        {type==='seasoning' &&(<h2>{text} 재료 추가</h2>)}
        {type==='edit' &&(<h2>재료 {text}하기</h2>)}
        {/*냉장고 재료추가 폼*/}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FridgeModalFrom register={register} errors={errors}/>
          {/*취소, 확인 버튼*/}
          <div className="modal_buttons">
            <StyledButton inverted={true} onClick={onCancel}>{cancelText}</StyledButton>
            <StyledButton blueBtn onClick={onConfirm}>{confirmText}</StyledButton>
          </div>
        </form>
      </ModalBlock>
    </Fullscreen>
  );
}

export default FridgeModal;