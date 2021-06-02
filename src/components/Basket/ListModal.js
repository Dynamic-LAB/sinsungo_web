import React, { forwardRef, useEffect, useImperativeHandle,useRef } from 'react';
import styled from 'styled-components';
import Button from "../common/Button";
import {useForm} from "react-hook-form";
import {MdRestaurant, MdAssignment} from "react-icons/md";
import WhiteBox from "../common/WhiteBox";
import axios from 'axios';

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
  font-family: 'Noto Sans KR', sans-serif;
  h2 {
    display: flex;
    font-size: 1.325rem;
    margin-top: 0;
  }
  h2 > div {
    color: #5887F9;
    margin-left: 5px;
  }
  .modal_buttons {
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 765px) {
    width: 300px;
    h2 {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 370px) {
    width: 250px;
    h2 {
      font-size: 1.1rem;
    }
  }
`;
//폼 스타일
const StyledWhiteBox = styled(WhiteBox)`
  height: 200px;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 15px 5px 15px;
`;
const InputBlock = styled.div`
  display: flex;
  align-items: center;

  .icon_input {
    display: flex;
    font-size: 1.2rem;
  }

  .dropdown_amount {
    margin-left: 20px;
  }
`;
const FormTitle = styled.div`
  display: flex;
  align-items: center;

  .input_title {
    display: flex;
    padding-top: 10px;
    font-size: 15px;
  }

  .input_index {
    display: flex;
    padding-top: 10px;
    margin-left: 15px;
    font-size: 10px;
    color: #FF2424;
  }
  @media only screen and (max-width: 370px) {
    .input_title {
      font-size: 13px;
    }
  }
`;
const StyledInput = styled.input`
  font-size: 0.75rem;
  border: none;
  background: #F0F0F0;
  border-radius: 10px;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-left: 10px;
  outline: none;
  width: 100%;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  @media only screen and (max-width: 370px) {
    font-size: 10px;
  }
`;
const StyledAmountInput = styled.input`
  font-size: 0.75rem;
  border: none;
  background: #F0F0F0;
  border-radius: 10px;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-left: 10px;
  outline: none;
  width: 52%;
  text-align: center;
  margin-right: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  @media only screen and (max-width: 370px) {
    font-size: 8px;
    width: 70%;
  }
`;
const StyledDropdown = styled.select`
  width: 110px;
  display: flex;
  font-size: 0.75rem;
  border: none;
  background: #F0F0F0;
  border-radius: 10px;
  padding: 0.5rem;
  outline: none;
  cursor: pointer;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  @media only screen and (max-width: 370px) {
    font-size: 10px;
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
  @media only screen and (max-width: 370px) {
    font-size: 10px;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`;
const textMap = {
  add: '추가',
  edit: '수정',
};


const ListModal = forwardRef(({
                     visible,
                     confirmText = '확인',
                     cancelText = '취소',
                     onConfirm,
                     onCancel,
                     id,
                     type,
                     item,
                     SetBasket
                   },ref) => {
  //폼 초기값
  const defaultValues = {
    list_name: type === 'edit' ? item.name : "",
    list_amount: type === 'edit' ? item.amount : "",
    list_unit: type === 'edit' ? item.unit : "",
    list_memo: type === 'edit' ? item.memo : "",
  };
  const {register, handleSubmit, formState: {errors}, reset, setValue, watch} = useForm({defaultValues});
  useImperativeHandle(ref,()=>({resetValue(){reset(defaultValues)}}))
  //구매목록 추가 요청
  const InsertBasketByRefId = (values, type) => {
    axios.post('/shoppinglist/',
      {
        id: JSON.parse(window.sessionStorage.getItem('User')).newRefId,
        name: values.list_name,
        memo: values.list_memo,
        amount: values.list_amount,
        unit: values.list_unit,
      }
    ).then((res) => {
      //DB response
      SetBasket();
    })
      .catch((res) => {
        console.log("erorr Msg:", res)
      });
  }
  //구매목록 수정 요청
  const UpdateBasketById = (values, id) => {
    axios.put('/shoppinglist/' + JSON.parse(window.sessionStorage.getItem('User')).newRefId,
      {
        id: id,
        name: values.list_name,
        memo: values.list_memo,
        amount: values.list_amount,
        unit: values.list_unit,
      }
    ).then((res) => {
      //DB response
      SetBasket();
    })
      .catch((res) => {
        console.log("erorr Msg:", res)
      });
  }

  //취소버튼 액션
  const onNotSubmit = () => {
    onCancel();
    reset();
  };
  //확인버튼 액션
  const onSubmit = (values) => {
    if (type !== "edit") {
      InsertBasketByRefId(values);
    } else {
      UpdateBasketById(values, id);
    }
    //reset(editValues(values));

    onConfirm();
  }

  const {list_name, list_amount, list_unit, list_memo} = watch();

  if (!visible) return null;
  const text = textMap[type];

  return (
    <Fullscreen>
      <ModalBlock>
        <h2>
          장바구니 목록
          {type === 'add' && (<div>{text}</div>)}
          {type === 'edit' && (<div>{text}</div>)}
        </h2>
        <form>
          <StyledWhiteBox>
            {/*재료입력*/}
            <label>
              <FormTitle>
                <div className="input_title">재료</div>
                {errors.list_name && <div className="input_index">{errors.list_name.message}</div>}
              </FormTitle>
              <InputBlock>
                <div className="icon_input"><MdRestaurant/></div>
                <StyledInput
                  type="text"
                  id="list_name"
                  autocomplete="off"
                  placeholder="재료명을 입력해주세요."
                  onChange={e => setValue("list_name", e.target.value)}
                  value={list_name}
                  {...register("list_name", {
                    required: "필수입력사항",
                    maxLength: {
                      value: 20,
                      message: "20자까지만 입력 가능합니다"
                    }
                  })}
                />
              </InputBlock>
            </label>
            {/*수량입력*/}
            <label>
              <FormTitle>
                <div className="input_title">수량</div>
                {errors.list_amount && <div className="input_index">{errors.list_amount.message}</div>}
                <Spacer/>
                {errors.list_unit && <div className="input_index">{errors.list_unit.message}</div>}
              </FormTitle>
              <InputBlock>
                <div className="icon_input"><MdRestaurant/></div>
                <StyledAmountInput
                  type="number"
                  id="list_amount"
                  autocomplete="off"
                  placeholder="수량을 입력해주세요."
                  onChange={e => setValue("list_amount", e.target.value)}
                  value={list_amount}
                  {...register("list_amount", {
                    required: "필수입력사항",
                    min: {
                      value: 1,
                      message: '0 이상 입력해주세요'
                    }
                  })}
                />
                <StyledDropdown
                  id="list_unit"
                  onChange={e => setValue("list_unit", e.target.value)}
                  {...register("list_unit", {
                    required: "필수입력사항",
                  })}
                >
                  <option value="개">개</option>
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="ml">ml</option>
                </StyledDropdown>
              </InputBlock>
            </label>
            {/*메모입력*/}
            <label>
              <FormTitle>
                <div className="input_title">메모</div>
                {errors.list_memo && <div className="input_index">{errors.list_memo.message}</div>}
              </FormTitle>
              <InputBlock>
                <div className="icon_input"><MdAssignment/></div>
                <StyledInput
                  type="text"
                  id="list_memo"
                  autocomplete="off"
                  placeholder="내용을 작성해주세요."
                  onChange={e => setValue("list_memo", e.target.value)}
                  value={list_memo}
                  {...register("list_memo", {
                    required: "필수입력사항",
                    maxLength: {
                      value: 20,
                      message: "20자까지만 입력 가능합니다"
                    }
                  })}
                />
              </InputBlock>
            </label>
          </StyledWhiteBox>
        </form>
        {/*취소, 확인 버튼*/}
        <div className="modal_buttons">
          <StyledButton inverted={true} onClick={onNotSubmit}>{cancelText}</StyledButton>
          <StyledButton blueBtn onClick={handleSubmit(onSubmit)}>{confirmText}</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
})

export default React.memo(ListModal);