import React, {useState} from 'react';
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {MdSearch} from "react-icons/md";
import Button from "../../common/Button";
import WhiteBox from "../../common/WhiteBox";
import DietMenuTag from "./DietMenuTag";
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";


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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
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
const StyledWhiteBox = styled(WhiteBox)`
  height: auto;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 8px 16px ;
`;
const DateBlock = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
`;
const DateLeft = styled.div`
  .basket-datepicker {
    display: flex;
    border: none;
    background: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
  }
`;
const DateRight = styled.div`
  .basket-select {
    border: none;
    background: none;
    outline: none;
    font-size: 16px;
    -moz-appearance: none;
    -webkit-appearance: none; //화살표 없애기 (for Safari, Chrome, Opera)
    color: #3C82D9;
    font-weight: bold;
    margin-right: 5px;
    cursor: pointer;
  }
  
`;
const MenuBlock = styled.div`
  font-size: 16px;
  align-items: center;
  .diet_menu {
    font-weight: bold;
  }
`;
const IngredientBlock = styled.div`
  font-size: 16px;
  align-items: center;
  .diet_ingredient{
    font-weight: bold;
  }
`;
const SearchBlock = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  border-bottom: 1px solid black;
`;
const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: '사용할 재료명을 입력해주세요.',
})`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-left: 10px;
`;
const ListBlock = styled.div`
  overflow-y: auto; //스크롤
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
const textMap = {
  add: '추가',
  edit: '수정',
};
//폼 초기값
const defaultValues = {
  diet_date: "",
  diet_chose: "",
  diet_menu: "",
};
const DietModal = ({
                     visible,
                     confirmText = '확인',
                     cancelText = '취소',
                     onConfirm,
                     onCancel,
                     type,
                   }) => {
  const [startDate, setStartDate] = useState(new Date());
  const {register, handleSubmit, formState: {errors}, reset, setValue, watch} = useForm({defaultValues});

  //취소버튼 액션
  const onNotSubmit = () => {
    onCancel();
    reset();
  };
  //확인버튼 액션
  const onSubmit = (values) => {
    console.log(values);
    onConfirm();
    reset();
  };

  if (!visible) return null;
  const text = textMap[type];

  return (
    <Fullscreen>
      <ModalBlock>
        <ModalTitle>
          <h2>
            식단
            {type === 'add' && (<div>{text}</div>)}
            {type === 'edit' && (<div>{text}</div>)}
          </h2>

        </ModalTitle>
        <form>
          <label>
            {/*날짜박스*/}
            <StyledWhiteBox>
              <DateBlock>
                <DateLeft>
                  <DatePicker
                    className="basket-datepicker" //클래스 명 지정
                    dateFormat="yyyy 년 MM 월 dd 일" //날짜 형식 설정
                    //closeOnScroll={true} //스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                    locale={ko} //언어설정 기본값 영어
                    selected={startDate} //value
                    //minDate={new Date()} //선택할 수 있는 최소 날짜값 지정
                    onChange={date => setStartDate(date)} //날짜를 선택하였을 때 실행될 함수
                    peekNextMonth
                    showMonthDropdown //월 선택
                    showYearDropdown //년도 선택
                    dropdownMode="select"
                    disabledKeyboardNavigation
                    placeholderText="날짜를 입력하세요."
                  />
                </DateLeft>
                <Spacer/>
                <DateRight>
                  {/*<div className="date_right">*/}
                  {/*  아침 식단*/}
                  {/*</div>*/}
                  <select id="basket-select" className="basket-select">
                    <option value="breakfast">아침</option>
                    <option value="lunch">점심</option>
                    <option value="dinner">저녁</option>
                  </select>
                  식단
                </DateRight>
              </DateBlock>
            </StyledWhiteBox>
          </label>
          <label>
            {/*메뉴박스*/}
            <StyledWhiteBox>
              <MenuBlock>
                <div className="diet_menu">메뉴</div>
                <DietMenuTag/>
              </MenuBlock>
            </StyledWhiteBox>
          </label>
          <label>
            {/*재료박스*/}
            <StyledWhiteBox>
              <IngredientBlock>
                <div className="diet_ingredient">재료</div>
              </IngredientBlock>
              <SearchBlock>
                <MdSearch style={{'fontSize': '1.2rem'}}/>
                <SearchInput/>
              </SearchBlock>
              <ListBlock>

              </ListBlock>
            </StyledWhiteBox>
          </label>
        </form>


        {/*버튼*/}
        <div className="modal_buttons">
          <StyledButton inverted={true}
                        onClick={onNotSubmit}>{cancelText}</StyledButton>
          <StyledButton blueBtn
                        onClick={onSubmit}>{confirmText}</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
}
export default DietModal;