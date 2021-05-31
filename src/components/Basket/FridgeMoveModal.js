import React, { forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import styled from 'styled-components';
import Button from "../common/Button";
import WhiteBox from "../common/WhiteBox";
import ReactDatePicker from "react-datepicker";
import {MdRestaurant, MdDateRange} from "react-icons/md";
import {ko} from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import {Controller, useForm} from "react-hook-form";
import axios from 'axios';
import GetBasketByRefrigratorId from "../ForServer/GetBasketByRefrigratorId"
import { setSeconds } from 'date-fns';
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
  
  .text_blue {
    color: #5887F9;
  }

  .modal_buttons {
    display: flex;
    justify-content: flex-end;
  }
`;
const ModalTitle = styled.div`
  display: flex;
  h2 {
    font-size: 1.3rem;
    margin-top: 0;
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
//폼 스타일
const StyledWhiteBox = styled(WhiteBox)`
  height: auto;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 5px 15px 15px;

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
const DateBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  .icon_input {
    display: flex;
    font-size: 1.2rem;
    margin-right: 10px;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
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

  .input_index_drop {
    display: flex;
    padding-top: 10px;
    font-size: 10px;
    color: #FF2424;
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
`;

const FridgeMoveModal = forwardRef(({
                           visible,
                           confirmText = '이동',
                           cancelText = '취소',
                           onMoveConfirm,
                           onCancel,
                           type,
                           ingredient
                         },ref) => {
         

  const defaultValues = {
    list_name: type==='edit'?ingredient.name:"",
    list_amount:type==='edit'?ingredient.amount:"",
    list_unit:type==='edit'?ingredient.unit:"",
  };
  
  
  const {register, handleSubmit, formState: {errors}, control, reset, setValue, watch} = useForm({defaultValues});
  const {list_name, list_amount, list_unit, list_date, list_date_chose, fridge_type} = watch();
  useImperativeHandle(ref, () => ({
    resetValue(){ // 함수 보내기
      reset(defaultValues);
    }
  }));
  const InsertIngredientByRefId = (values) => {
    /* values
    fridge_type: "냉장"
    list_amount: "22"
    list_date: Fri Feb 09 2001 00:00:00 GMT+0900 (대한민국 표준시) {}
    list_date_chose: "보관일"
    list_name: "eee"
    list_unit: "kg"
    */
    //날짜 문자열 형식 수정
    values.list_date = values.list_date.getFullYear() + '-' + (values.list_date.getMonth() + 1).toString().padStart(2, '0') + '-' + values.list_date.getDate().toString().padStart(2, '0');
    axios.post('/refrigerator/ingredient',
      [{
        id: JSON.parse(window.sessionStorage.getItem('User')).newRefId,
        category: values.fridge_type,
        name: values.list_name,
        amount: values.list_amount,
        unit: values.list_unit,
        expiration_type: values.list_date_chose,
        expiration_date: values.list_date,
      }]
    ).then((res) => {
      //DB response
    })
      .catch((res) => {
        console.log("error Msg:", res)
      });
  }

  const onSubmit = (values) => {
    InsertIngredientByRefId(values);
    onMoveConfirm();
    reset();
  };
  const onNotSubmit = () => {
    onCancel();
    reset();
  };
  if (!visible) return null;
  return (
    <Fullscreen>

      <ModalBlock>
        <form>
          <ModalTitle>
            <h2>냉장고로 <span className="text_blue">이동</span> 하기</h2>
            <Spacer/>
            <label>
              {/*냉장고 type 선택*/}
              <StyledDropdown
                id="fridge_type"
                onChange={e => setValue("fridge_type", e.target.value)}
                value={fridge_type}
                {...register("fridge_type", {
                  required: "필수입력사항",
                })}
              >
                <option value="냉장">냉장</option>
                <option value="냉동">냉동</option>
                <option value="신선">신선</option>
                <option value="상온">상온</option>
                <option value="조미료/양념">조미료/양념</option>
              </StyledDropdown>
            </label>
          </ModalTitle>
          <StyledWhiteBox>
            <label>
              {/*재료입력*/}
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
            <label>
              {/*수량입력*/}
              <FormTitle>
                <div className="input_title">수량</div>
                {errors.list_amount && <div className="input_index">{errors.list_amount.message}</div>}
                <Spacer/>
                {errors.list_unit && <div className="input_index_drop">{errors.list_unit.message}</div>}
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
                {/*단위선택*/}
                <StyledDropdown
                  id="list_unit"
                  onChange={e => setValue("list_unit", e.target.value)}
                  value={list_unit}
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
            <label>
              {/*날짜입력*/}
              <FormTitle>
                <div className="input_title">날짜</div>
                {errors.list_date && <div className="input_index">{errors.list_date.message}</div>}
                <Spacer/>
                {errors.list_date_chose && <div className="input_index_drop">{errors.list_date_chose.message}</div>}
              </FormTitle>
              <DateBlock>
                <div className="icon_input"><MdDateRange/></div>
                {/*날짜입력*/}
                <Controller
                  control={control}
                  name="ReactDatePicker"
                  render={({field: {onChange, onBlur, value, ref}}) => (
                    <ReactDatePicker
                      className="input-datepicker" //클래스 명 지정
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                      locale={ko} //언어설정 한글
                      dateFormat="P" //날짜 형식 설정
                      placeholderText="날짜를 입력하세요."
                      shouldCloseOnSelect={true}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                  )}
                  onChange={e => setValue("list_date", e.target.value)}
                  value={list_date}
                  {...register("list_date", {
                    required: "필수입력사항",
                  })}
                />
                <Spacer/>
                {/*방법선택*/}
                <StyledDropdown
                  id="list_date_chose"
                  onChange={e => setValue("list_date_chose", e.target.value)}
                  value={list_date_chose}
                  {...register("list_date_chose", {
                    required: "필수입력사항",
                  })}
                >
                  <option value="유통기한">유통기한</option>
                  <option value="제조일자">제조일자</option>
                  <option value="보관일">보관일</option>
                </StyledDropdown>
              </DateBlock>
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

export default FridgeMoveModal;