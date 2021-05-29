import React, {useState,useRef} from 'react';
import styled from 'styled-components';
import { MdDelete} from "react-icons/md";
import WhiteBox from "../../common/WhiteBox";
import DietModal from "./DietModal";
import {useDietDispatch} from "./DietContext";
import GetDietByRefrigratorId from "../../ForServer/GetDietByRefrigratorId"
import axios from 'axios';

const Remove = styled.div`
  display: flex;
  padding: 8px 5px;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 1.2rem;
  color: #dee2e6;
  .delete_btn {
    opacity: 0;
    &:hover {
      color: #ff6b6b;
    }
  }

`;
const StyledWhiteBox = styled(WhiteBox)`
  display: flex;
  height: auto;
  margin: 15px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
  cursor: pointer;
  &:hover{
    border: 1px dashed #bcbcbc;
    ${'.delete_btn'} {
      opacity: 1;
    }
  }
`;
const DietBlock = styled.div`
  display: flex;
  padding: 10px;
`;
const Spacer = styled.div`
  flex-grow: 1;
`;
const ItemBlock = styled.div`
  font-size: 13px;
`;
const DateBlock = styled.div`
  display: flex;
  padding: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  .diet_date {
    font-size: 14px;
    margin-right: 10px;
  }
  .diet_date_memo {
    font-size: 11px;
    color: #3c82d9;
    margin-left: 10px;
    padding-top: 3px;
  }
`;
const FoodBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  font-size: 16px;
  .diet_food {
    float: right;
    font-weight: 700;
  }
`;
const IngredientBlock = styled.div`
  display: flex;
  padding: 5px;
  font-size: 10px;
  .diet_main_ingredient {
    color: #27D598;
    margin-right: 10px;
  }
  .diet_main_ingredient_item {
    margin-right: 10px;
  }
`;
const DietCard = ({diet,id, memo, food, date, ingredient_item}) => {
  const isChecked=useRef([]);
  const [modal, setModal] = useState(false);
  const dispatch = useDietDispatch();
  const onEdit = () => {
    setModal(true);
  };
  const onRemove = () =>{
    axios.delete("/diet/" + id, {
      params: {}
    })
      .then((response) => {
        console.log("삭제됨:", response);
      }).catch((error) => {
      // 오류발생시 실행
    }).then(() => {
      if(JSON.parse(window.sessionStorage.getItem('User')))
      GetDietByRefrigratorId({
        id:JSON.parse(window.sessionStorage.getItem('User')).newRefId,
        dispatch:dispatch
      });
    });
    //props.setIngredients()
  }
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    if(JSON.parse(window.sessionStorage.getItem('User')))
    GetDietByRefrigratorId({
      id:JSON.parse(window.sessionStorage.getItem('User')).newRefId,
      dispatch:dispatch
    });
    setModal(false);
  };
  return(
    <>
      <StyledWhiteBox >
        <DietBlock>
          <div onClick={onEdit}>
            <ItemBlock>
              <DateBlock>
                <div className="diet_date">
                  {date}
                </div>
                <span> | </span>
                <div className="diet_date_memo">
                  {memo}
                </div>
              </DateBlock>
              <FoodBlock>
                <div className="diet_food">
                  {food}
                </div>
              </FoodBlock>
              <IngredientBlock>
                <div className="diet_main_ingredient">
                  주재료
                </div>
                <div className="diet_main_ingredient_item">
                  {ingredient_item}
                </div>
              </IngredientBlock>
            </ItemBlock>
          </div>
          <Spacer onClick={onEdit}/>
          <Remove onClick={() => onRemove(id)}>
            <MdDelete className="delete_btn"/>
          </Remove>
        </DietBlock>

      </StyledWhiteBox>
      <DietModal
        diet={diet}
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        type="edit"
        isChecked={isChecked}
      />
    </>

  );
}

export default DietCard;