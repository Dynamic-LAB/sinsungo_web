import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm, Controller} from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import {MdRestaurant, MdDateRange} from "react-icons/md";
import Button from "../common/Button";
import WhiteBox from "../common/WhiteBox";
import {ko} from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./Fridge.css";
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
//폼 스타일
const StyledWhiteBox = styled(WhiteBox)`
  height: 200px;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 15px;

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

//type 지정
const textMap = {
  cold: '냉장',
  freeze: '냉동',
  fresh: '신선',
  temp: '실온',
  seasoning: '조미료/양념',
  edit: '수정',
};
//폼 초기값
const defaultValues = {
  i_name: "",
  i_amount: "",
  i_unit: "",
  i_date: "",
  date_chose: "",
};
const InsertIngredientByRefId=(values)=>{
  values.i_date=values.i_date.getFullYear() + '-' + (values.i_date.getMonth() + 1).toString().padStart(2, '0') + '-' + values.i_date.getDate().toString().padStart(2, '0');
  //category`, `name`, `amount`, `unit`, `expiration_type`, `expiration_date`, `refrigerator_id
  axios.post('/refrigerator/ingredient',
  {
    //insert into refrigeratoringredient values(3,"냉장","참치",1,"개","20200101","20200101",6)
    /*id:5,
    category:"냉동",
    name:"참치",
    amount:1,
    unit:"개",
    expiration_type:"유통기한",
    expiration_date:"20200101",
    refridgerator_id:Math.floor(Math.random(100,10000))*/
    id:null,
    category:"냉동",
    name:values.i_name,
    amount:values.i_amount,
    unit:values.i_unit,
    expiration_type:values.date_chose,
    expiration_date:values.i_date,
    refridgerator_id:JSON.parse(window.sessionStorage.getItem('User')).newRefId
  }
  ).then((res)=>{
    //DB response
    //props.setLoginInfo([postLoginType,id])
  
  })
  .catch((res)=>{
    console.log("erorr Msg:",res)
  });
}
const FridgeModal = ({
                       visible,
                       type,
                       confirmText = '확인',
                       cancelText = '취소',
                       onConfirm,
                       onCancel,
                       onCloseClick,
                     }) => {
  const {register, handleSubmit, formState: {errors}, control} = useForm({defaultValues});
  const onSubmit = (values) => {
    InsertIngredientByRefId(values);
  }


  if (!visible) return null;
  const text = textMap[type];


  return (
    <Fullscreen >
      <ModalBlock>
        {type === 'cold' && (<h2>{text} 재료 추가</h2>)}
        {type === 'freeze' && (<h2>{text} 재료 추가</h2>)}
        {type === 'fresh' && (<h2>{text} 재료 추가</h2>)}
        {type === 'temp' && (<h2>{text} 재료 추가</h2>)}
        {type === 'seasoning' && (<h2>{text} 재료 추가</h2>)}
        {type === 'edit' && (<h2>재료 {text}하기</h2>)}

        {/*냉장고 재료추가 폼*/}
        <form>
          <StyledWhiteBox>
            <label>
              {/*재료입력*/}
              <FormTitle>
                <div className="input_title">재료</div>
                {errors.i_name && <div className="input_index">{errors.i_name.message}</div>}
              </FormTitle>
              <InputBlock>
                <div className="icon_input"><MdRestaurant/></div>
                <StyledInput
                  type="text"
                  id="i_name"
                  autocomplete="off"
                  placeholder="재료명을 입력해주세요."
                  {...register("i_name", {
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
                {errors.i_amount && <div className="input_index">{errors.i_amount.message}</div>}
              </FormTitle>
              <InputBlock>
                <div className="icon_input"><MdRestaurant/></div>
                <StyledAmountInput
                  type="number"
                  id="i_amount"
                  autocomplete="off"
                  placeholder="수량을 입력해주세요."
                  {...register("i_amount", {
                    required: "필수입력사항",
                    min: 0,
                  })}
                />
                {/*단위선택*/}
                <StyledDropdown
                  id="i_unit"
                  form="fridgeForm"
                  {...register("i_unit")}
                >
                  <option value="piece">개</option>
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
                {errors.i_date && <div className="input_index">{errors.i_date.message}</div>}
              </FormTitle>
              <DateBlock>
                <div className="icon_input"><MdDateRange/></div>
                {/*날짜입력*/}
                <Controller
                  control={control}
                  name="Datepicker"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <ReactDatePicker
                      className="input-datepicker" //클래스 명 지정
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                      locale={ko} //언어설정 한글
                      dateFormat="yyyy-MM-dd" //날짜 형식 설정
                      //isClearable //날짜 없애는 버튼
                      minDate={new Date()} //선택할 수 있는 최소 날짜값 지정
                      placeholderText="날짜를 입력하세요."
                    />
                  )}
                  {...register("i_date", {
                    required: "필수입력사항",
                  })}
                />
                <Spacer/>
                {/*방법선택*/}
                <StyledDropdown
                  id="date_chose"
                  form="fridgeForm"
                  {...register("date_chose")}
                >
                  <option value="date">유통기한</option>
                  <option value="manufacture">제조일자</option>
                  <option value="storage">보관일</option>
                </StyledDropdown>
              </DateBlock>
            </label>
          </StyledWhiteBox>
        </form>
        {/*취소, 확인 버튼*/}
        <div className="modal_buttons">
          <StyledButton inverted={true} onClick={onCancel}>{cancelText}</StyledButton>
          {/*확인버튼 누르면 모달 폼 닫히는 것 구현 안됨*/}
          <StyledButton blueBtn onClick={handleSubmit(onSubmit)}>{confirmText}</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
}

export default FridgeModal;
