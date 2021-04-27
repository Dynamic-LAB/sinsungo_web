import React from 'react';
import styled from 'styled-components';
import {MdRestaurant, MdDateRange} from "react-icons/md";
import WhiteBox from "../common/WhiteBox";
import DatePickerComponent from "../common/DatePicker/DatePickerComponent";

// 스타일지정
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


const FridgeModalFrom = ({register, errors}) => {


  return (
    <>

      <StyledWhiteBox>
          <label>
            <FormTitle>
              <div className="input_title">재료</div>
              {errors.i_name && <div className="input_index">{errors.i_name.message}</div>}
            </FormTitle>
            <InputBlock>
              <div className="icon_input"><MdRestaurant/></div>
              {/*재료입력*/}
              <StyledInput
             
                type="text"
                id="i_name"
                placeholder="재료명을 입력해주세요."
                {...register("i_name", {required: "필수입력사항", maxLength: {value: 20, message: "20자까지만 입력 가능합니다"}})}
              />
            </InputBlock>

            <FormTitle>
              <div className="input_title">수량</div>
              {errors.i_amount && <div className="input_index">{errors.i_amount.message}</div>}
   
            </FormTitle>
            <InputBlock>
              <div className="icon_input"><MdRestaurant/></div>
              {/*수량입력*/}
              <StyledAmountInput
                type="number"
                id="i_amount"
                autocomplete="off"
                placeholder="수량을 입력해주세요."
                {...register("i_amount", {
                  required: "필수입력사항",
                  // min:"0",
                })}
              />
              {/*단위선택*/}
              <StyledDropdown
                id="i_unit"
                form="fridgeForm"
                {...register("i_unit")}
              >
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option>
              </StyledDropdown>
            </InputBlock>

            <FormTitle>
              <div className="input_title">날짜</div>
              {errors.datePicker && <div className="input_index">{errors.datePicker.message}</div>}

            </FormTitle>
            <DateBlock>
              <div className="icon_input"><MdDateRange/></div>
              {/*날짜입력*/}
              <DatePickerComponent
                id="datePicker"
                {...register("datePicker", {required: "필수입력사항"})}
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
    </>
  );
}

export default FridgeModalFrom;

