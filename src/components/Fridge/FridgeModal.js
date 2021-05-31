import React, { useContext } from 'react';
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
import GetIngredientByRefrigratorId from "../ForServer/GetIngredientByRefrigratorId"
import { Context } from '../../Ingredient';

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
  .text_blue {
    color: #5887F9;
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
//type 지정
const textMap = {
  cold: '냉장',
  freeze: '냉동',
  fresh: '신선',
  temp: '상온',
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
                       ingredient
                     }) => {

//폼 초기값
const defaultValues = {
  i_name: type==='edit'?ingredient.name:"",
  i_amount:type==='edit'?ingredient.amount:"",
  i_unit:type==='edit'?ingredient.unit:"",
  i_date:type==='edit'?new Date(ingredient.expiration_date.replaceAll("-","/")):"",
  date_chose:type==='edit'?ingredient.expiration_type:"",
};

const editValues =(values)=> {
  //console.log(values)
  return({
  i_name: type==='edit'?values.i_name:"",
  i_amount:type==='edit'?values.i_amount:"",
  i_unit:type==='edit'?values.i_unit:"",
  i_date:type==='edit'?new Date(values.i_date.replaceAll("-","/")):"",
  date_chose:type==='edit'?values.date_chose:"",
});
}

const {state,dispatch}=useContext(Context);

const InsertIngredientByRefId = (values, type) => {
  //날짜 문자열 형식 수정
  values.i_date = values.i_date.getFullYear() + '-' + (values.i_date.getMonth() + 1).toString().padStart(2, '0') + '-' + values.i_date.getDate().toString().padStart(2, '0');
  var category;
  //타입결정
  if (type === 'cold') category = textMap.cold;
  if (type === 'freeze') category = textMap.freeze
  if (type === 'fresh') category = textMap.fresh
  if (type === 'temp') category = textMap.temp
  if (type === 'seasoning') category = textMap.seasoning
  if (type === 'edit') category = textMap.edit

  axios.post('/refrigerator/ingredient',
    [{
      id: JSON.parse(window.sessionStorage.getItem('User')).newRefId,
      category: category,
      name: values.i_name,
      amount: values.i_amount,
      unit: values.i_unit,
      expiration_type: values.date_chose,
      expiration_date: values.i_date,
    }]
  ).then((res) => {
    if (JSON.parse(sessionStorage.getItem('User'))) {
      GetIngredientByRefrigratorId(
        {
          id: JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch: dispatch
        }
      )
    }
  })
    .catch((res) => {
      console.log("error Msg:", res)
    });
}
const UpdateIngredientById=(values,type,id)=>{

  //날짜 문자열 형식 수정
  values.i_date=values.i_date.getFullYear() + '-' + (values.i_date.getMonth() + 1).toString().padStart(2, '0') + '-' + values.i_date.getDate().toString().padStart(2, '0');
  axios.put('/refrigerator/ingredient/'+JSON.parse(window.sessionStorage.getItem('User')).newRefId,
  {
    id:id,
    category:type,
    name:values.i_name,
    amount:values.i_amount,
    unit:values.i_unit,
    expiration_type:values.date_chose,
    expiration_date:values.i_date,
  }
  ).then((res)=>{
    if (JSON.parse(sessionStorage.getItem('User'))) {
      GetIngredientByRefrigratorId(
        {
          id: JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch: dispatch
        }
      )
    }
  })
  .catch((res)=>{
    console.log("erorr Msg:",res)
  });
}
  const onSubmit = (values) => {

    if(type!=="edit"){
    InsertIngredientByRefId(values,type);
    }else{
    UpdateIngredientById(values,ingredient.category,ingredient.id);

    }
    reset(editValues(values));
    onConfirm();
  }
  const onNotSubmit = () => {
    onCancel();
    reset();
  };
  const {register, handleSubmit, formState: {errors}, control, reset, setValue, watch} = useForm({defaultValues});
  const {i_name, i_amount, i_unit, i_date, date_chose} = watch();

  if (!visible) return null;
  const text = textMap[type];

  return (
    <Fullscreen>
      <ModalBlock>
        {type === 'cold' && (<h2>{text} 재료 <span className="text_blue">추가</span></h2>)}
        {type === 'freeze' && (<h2>{text} 재료 <span className="text_blue">추가</span></h2>)}
        {type === 'fresh' && (<h2>{text} 재료 <span className="text_blue">추가</span></h2>)}
        {type === 'temp' && (<h2>{text} 재료 <span className="text_blue">추가</span></h2>)}
        {type === 'seasoning' && (<h2>{text} 재료 <span className="text_blue">추가</span></h2>)}
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
                  onChange={e => setValue("i_name", e.target.value)}
                  value={i_name}
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
                <Spacer/>
                {errors.i_unit && <div className="input_index_drop">{errors.i_unit.message}</div>}
              </FormTitle>
              <InputBlock>
                <div className="icon_input"><MdRestaurant/></div>
                <StyledAmountInput
                  type="number"
                  id="i_amount"
                  autocomplete="off"
                  placeholder="수량을 입력해주세요."
                  onChange={e => setValue("i_amount", e.target.value)}
                  value={i_amount}
                  {...register("i_amount", {
                    required: "필수입력사항",
                    min: {
                      value: 1,
                      message: '0 이상 입력해주세요'
                    }
                  })}
                />
                {/*단위선택*/}
                <StyledDropdown
                  id="i_unit"
                  onChange={e => setValue("i_unit", e.target.value)}
                  value={i_unit}
                  {...register("i_unit", {
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
                {errors.i_date && <div className="input_index">{errors.i_date.message}</div>}
                <Spacer/>
                {errors.date_chose && <div className="input_index_drop">{errors.date_chose.message}</div>}
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
                  onChange={e => setValue("i_date", e.target.value)}
                  value={i_date}
                  {...register("i_date", {
                    required: "필수입력사항",
                  })}
                />
                <Spacer/>
                {/*방법선택*/}
                <StyledDropdown
                  id="date_chose"
                  onChange={e => setValue("date_chose", e.target.value)}
                  value={date_chose}
                  {...register("date_chose", {
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
}

export default FridgeModal;
