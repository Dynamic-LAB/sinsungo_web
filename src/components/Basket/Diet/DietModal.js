import React, {useCallback, useRef, useState,useContext, useEffect} from 'react';
import styled from "styled-components";
import {useForm, Controller} from "react-hook-form";
import {MdCancel, MdSearch} from "react-icons/md";
import Button from "../../common/Button";
import WhiteBox from "../../common/WhiteBox";
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import DietIngredientList from "./DietIngredientList";
import GetIngredientByRefrigratorId from "../../ForServer/GetIngredientByRefrigratorId"
import {Context} from "../../../Ingredient"
import axios from 'axios';
//import {useDietDispatch, useDietNextId} from "./DietContext";

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
  width: 500px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  .modal_buttons {
    display: flex;
    justify-content: flex-end; //오른쪽 끝에 배치
  }
  @media only screen and (max-width: 765px) {
    width: 300px;
  }
  @media only screen and (max-width: 370px) {
    width: 250px;
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
const StyledWhiteLIstBox = styled(WhiteBox)`
  height: 300px;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 8px 16px ;
`;
const DateBlock = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  .index {
    display: flex;
    font-size: 10px;
    color: #FF2424;
  }
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
const MemoBlock = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  .diet_memo_text {
    font-weight: bold;
  }
  .index {
    display: flex;
    margin-left: 15px;
    font-size: 10px;
    color: #FF2424;
  }
`;
const MemoInputBlock = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  border-bottom: 1px solid black;
`;
const StyledInput = styled.input`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  padding-bottom: 0.3rem;
  padding-top: 0.5rem;
`;
const MenuBlock = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  .diet_menu {
    font-weight: bold;
  }
  .diet_index{
    display: flex;
    margin-left: 15px;
    font-size: 10px;
    color: #000000;
  }
  .diet_index_red{
    display: flex;
    margin-left: 15px;
    font-size: 10px;
    color: #FF2424;
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
  padding-bottom: 0.3rem;
  padding-top: 0.5rem;
  margin-left: 10px;
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
const Spacer = styled.div`
  flex-grow: 1;
`;
//메뉴태그부분 스타일
const TagBlock = styled.div`
  width: auto;
  padding-top: 10px;
`;
const TagUl = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  li {
    display: flex;
    align-items: center;
    background: #B4CEFE;
    border-radius: 20px;
    color: #010101;
    font-weight: 300;
    font-size: 13px;
    list-style: none;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px 10px;
    button {
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding-left: 10px;
    }
  }
  .input-tag__tags__input {
    background: none;
    flex-grow: 1;
    padding: 5px;
  }
`;
const TagInputEnter = styled.input`
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: 13px;
`;
const textMap = {
  add: '추가',
  edit: '수정',
};
//폼 초기값

const DietModal = ({
                     diet,
                     isChecked,
                     visible,
                     confirmText = '확인',
                     cancelText = '취소',
                     onConfirm,
                     onCancel,
                     type,
                   }) => {         
  const defaultValues = {
   diet_modal_date: type==='edit'?new Date(diet.date.replaceAll("-","/")):"",
   diet_modal_memo: type==='edit'?diet.memo:"",
   menu_modal_tag: type==='edit'?diet.menus:[],
   };  
  
   const EditValues=(values) => {
     return({
    diet_modal_date: type==='edit'?new Date(values.date.replaceAll("-","/")):"",
    diet_modal_memo: type==='edit'?values.memo:"",
    menu_modal_tag: type==='edit'?values.menus:[],
    })
  }
  const {register, handleSubmit, formState: {errors}, reset, setValue, watch, control} = useForm({defaultValues});
  const {diet_modal_date, diet_modal_memo, menu_modal_tag} = watch();
 
  // const dispatch = useDietDispatch();
  // const nextId = useDietNextId();
  const {state,dispatch}=useContext(Context);
  useEffect(()=>{
    diet&&diet.ingredients.map(item=>{isChecked.current.push(item.id)});
    diet&&setTags(diet.menus.filter((item)=>{if(item!=null)return item}) );
    if (JSON.parse(sessionStorage.getItem('User'))) {
      GetIngredientByRefrigratorId(
        {
          id: JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch: dispatch
        }
      )
    }
  },[])
  //냉장고 재료 부분 check 액션
  const onToggle =(id,type=false)=>{
    let isOn=false;
    let setIndex=0;
    isChecked.current.forEach((item,index) => {
      if(item===id){
        isOn=true;
        setIndex=index;
        return;
      }
    });
    if(isOn){
      if(type){
        //이미 존재한다면 삭제
      isChecked.current.splice(setIndex,1);
      return false 
      }
      return true;
    }
    else if(type){
      //없다면 추가
      isChecked.current=isChecked.current.concat(id)
      return true;
      }
      return false
  }
//메뉴 칩 입력 기능
  let tagInput = useRef();
  const [input, setInput] = useState(true);
  const [searchWord,SetSearchWord]=useState();
  const [tags, setTags] = useState([]);
  //삭제 버튼 구현
  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i,1);
    setTags(newTags);
    setValue("menu_modal_tag", newTags);
    setInput(true);
  };
  // enter 키 누르면 입력
  const inputKeyDown = (e) => {
    const val = e.target.value;
    if(e.key === 'Enter' && val) {
      if(tags.find(tag => tag.toLowerCase() === val.toLowerCase())){
        alert('중복된 단어입니다!');
        return;
      }
      if(tags.length === 9) {
        setInput(false);
      } //10개가 되면 추가하지 않음
      setTags([...tags, val]);
      setValue("menu_modal_tag",[...tags, val] );
      tagInput.value = null; //입력하면 칩 생성하고 input 다시 초기화
    }
  };

  //확인버튼 액션
  const onSubmit = (values) => {
    var ingredients=[];
    state.IngredientList.map((item)=>{if(isChecked.current.includes(item.id))ingredients.push(item)})
    if(type!=='edit'){
    InsertDietByRefId(values,ingredients)
    }else{
      UpdateDiet(values,ingredients);
    }
    //nextId.current += 1;
  };
  const UpdateDiet=(values,ingredients)=>{
     //날짜 문자열 형식 수정
     while(values.menu_modal_tag.length<10){
      values.menu_modal_tag=values.menu_modal_tag.concat(null)
    }
    values.diet_modal_date = values.diet_modal_date.getFullYear() + '-' + (values.diet_modal_date.getMonth() + 1).toString().padStart(2, '0') + '-' + values.diet_modal_date.getDate().toString().padStart(2, '0');
  axios.put('/diet/'+JSON.parse(window.sessionStorage.getItem('User')).newRefId,
  [{
    id:diet.id,
    memo:diet.memo,
    date:diet.date,
    menus:diet.menus,
    ingredients:diet.ingredients
  },{
    id:diet.id,
    memo:values.diet_modal_memo,
    date:values.diet_modal_date,
    menus:values.menu_modal_tag,
    ingredients:ingredients
  }]
  ).then((res)=>{
    //DB response
    onConfirm();
    tags.length = 0;
    setTags(values.menu_modal_tag.filter((item)=>{if(item!=null)return item}));
    reset(EditValues(values));
  })
  .catch((res)=>{
    console.log("erorr Msg:",res)
  });
  }
  
  const InsertDietByRefId = (values,ingredients) => {
    while(values.menu_modal_tag.length<10){
      values.menu_modal_tag=values.menu_modal_tag.concat(null)
    }
    values.diet_modal_date = values.diet_modal_date.getFullYear() + '-' + (values.diet_modal_date.getMonth() + 1).toString().padStart(2, '0') + '-' + values.diet_modal_date.getDate().toString().padStart(2, '0');
   
    axios.post('/diet/',
      {
          id:JSON.parse(sessionStorage.getItem('User')).newRefId,
          memo:values.diet_modal_memo,
          date:values.diet_modal_date,
          menus:values.menu_modal_tag,
          ingredients:ingredients
      }
    ).then((res) => {
      //DB response
      onConfirm();
      tags.length = 0;
      reset(EditValues(values));
    })
      .catch((res) => {
        console.log("error Msg:", res)
      });
  }
  //취소버튼 액션
  const onNotSubmit = () => {
    onCancel();
    if(type!=='edit')
    tags.length = 0;
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
          {/*날짜박스*/}
          <label>
            <StyledWhiteBox>
              <DateBlock>
                <DateLeft>
                  <Controller
                    control={control}
                    name="ReactDatePicker"
                    render={({field: {onChange, onBlur, value, ref}}) => (
                      <DatePicker
                        className="basket-datepicker" //클래스 명 지정
                        dateFormat="yyyy년 MM월 dd일" //날짜 형식 설정
                        locale={ko} //언어설정 기본값 영어
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value} //value
                        //minDate={new Date()} //선택할 수 있는 최소 날짜값 지정
                        peekNextMonth
                        showMonthDropdown //월 선택
                        showYearDropdown //년도 선택
                        dropdownMode="select"
                        disabledKeyboardNavigation
                        placeholderText="날짜를 선택해주세요."
                      />
                    )}
                    onChange={e => setValue("diet_modal_date", e.target.value)}
                    value={diet_modal_date}
                    {...register("diet_modal_date", {
                      required: "날짜를 선택해주세요!",
                    })}
                  />
                </DateLeft>
                <Spacer/>
                {errors.diet_modal_date && <div className="index">{errors.diet_modal_date.message}</div>}
              </DateBlock>
            </StyledWhiteBox>
          </label>
          {/*메모박스*/}
          <label>
            <StyledWhiteBox>
              <MemoBlock>
                <span className="diet_memo_text">메모</span>
                {errors.diet_modal_memo && <div className="index">{errors.diet_modal_memo.message}</div>}
              </MemoBlock>
              <MemoInputBlock>
                <StyledInput
                  type="text"
                  id="diet_memo"
                  autocomplete="off"
                  placeholder="예) 아침식단"
                  onChange={e => setValue("diet_modal_memo", e.target.value)}
                  value={diet_modal_memo}
                  {...register("diet_modal_memo", {
                    required: "메모를 작성해주세요!",
                    maxLength: {
                      value: 20,
                      message: "20자까지만 입력 가능합니다"
                    }
                  })}
                />
              </MemoInputBlock>
            </StyledWhiteBox>
          </label>
          {/*메뉴박스*/}
          <label>
            <StyledWhiteBox>
              <MenuBlock>
                <span className="diet_menu">메뉴</span>
                <div className="diet_index">10개만 입력 가능합니다</div>
                {errors.menu_modal_tag && <div className="diet_index_red">{errors.menu_modal_tag.message}</div>}
              </MenuBlock>
                {/*메뉴태그 입력 칩*/}
                <TagBlock>
                  <TagUl>
                    {tags.map((tag, i) => (
                      <li
                        key={i}
                        value={menu_modal_tag}
                        {...register("menu_modal_tag",{
                          required: "필수입력사항",
                        })}
                        >
                        {tag}
                        <button type="button" >
                          <MdCancel onClick={() => { removeTag(i) }}/>
                        </button>
                      </li>
                    ))}
                    {input ? <li className="input-tag__tags__input">
                      <TagInputEnter
                        type="text"
                        onKeyDown={inputKeyDown}
                        placeholder="# 메뉴이름"
                        ref={c => {tagInput = c;}}/>
                    </li> : null}

                  </TagUl>
                </TagBlock>

            </StyledWhiteBox>
          </label>
          {/*재료박스*/}
          <label>
            <StyledWhiteLIstBox>
              <IngredientBlock>
                <div className="diet_ingredient">재료2</div>
              </IngredientBlock>
              <SearchBlock>
                <MdSearch style={{'fontSize': '1.2rem'}}/>
                <SearchInput onChange={(e)=>SetSearchWord(e.target.value)}/>
              </SearchBlock>
              <DietIngredientList searchWord={searchWord} onToggle={onToggle}/>
            </StyledWhiteLIstBox>
          </label>
        </form>
        {/*버튼*/}
        <div className="modal_buttons">
          <StyledButton inverted={true} onClick={onNotSubmit}>{cancelText}</StyledButton>
          <StyledButton blueBtn onClick={handleSubmit(onSubmit)}>{confirmText}</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
}
export default DietModal;