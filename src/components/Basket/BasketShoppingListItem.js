import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import {MdKitchen, MdDelete} from "react-icons/md";
import ListModal from "./ListModal";
import {useShoppingDispatch, useShoppingState} from "./ListContext";
import GetBasketByRefrigratorId from "../ForServer/GetBasketByRefrigratorId"
import axios from 'axios';
import FridgeMoveModal from "./FridgeMoveModal";

const Remove = styled.div`
  display: flex;
  align-items: center; //세로중앙정렬
  justify-content: center;
  color: #dee2e6;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0;

  &:hover {
    color: #ff6b6b;
  }
  @media only screen and (max-width: 370px) {
    font-size: 1rem;
  }
`;
const MoveBtn = styled.div`
  display: flex;
  align-items: center; //세로중앙정렬
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 10px;
  color: #dee2e6;
  opacity: 0;

  &:hover {
    color: #626262;
  }
  @media only screen and (max-width: 370px) {
    font-size: 1rem;
  }
`;
const ItemBlock = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  font-size: 13px;

  .text {
    display: flex;
    flex: 1;
    width: 40%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  &:nth-child(even) {
    background: #f8f9fa;
  }

  &:hover {
    ${Remove} {
      opacity: 1;
    }

    ${MoveBtn} {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 978px) {
    padding: 10px;
  }
`;
const Item = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 978px) {
    font-size: 12px;
  }
`;

const ItemIndex = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  font-size: 10px;
  color: #27D598;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 978px) {
    font-size: 8px;
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-family: 'Noto Sans KR', sans-serif;

  .count_num {
    display: flex;
    margin-left: 20px;
    text-align: center;
  }

  .count_unit {
    display: flex;
    margin-left: 8px;
    text-align: center;
  }

  @media only screen and (max-width: 978px) {
    font-size: 12px;
  }
`;

const BasketShoppingListItem = ({id, name, memo, count, unit, item}) => {
  const shoppingItem = useRef();
  const basketItem = useRef();
  //const {shopping_id, shopping_name, shopping_index, shopping_count,} = list;
  const dispatch = useShoppingDispatch();
  const SetBasket = () => {
    if (JSON.parse(sessionStorage.getItem('User'))) {
      GetBasketByRefrigratorId(
        {
          id: JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch: dispatch
        }
      )
    }
  }
  //구매목록 삭제 함수
  const DeleteBasketById = (id) => {
    axios.delete(" shoppinglist/" + id, {
      params: {}
    })
      .then((response) => {
        SetBasket();
        console.log("(재갱신완료)__구매목록 삭제됨:id:", id, response);
      }).catch((error) => {
      // 오류발생시 실행
    }).then(() => {
      // 항상 실행
    });
    //props.setIngredients()
  }

  //삭제 함수
  const onRemove = (id) => {
    DeleteBasketById(id);
  }

  //모달 on, off 함수
  const [modal, setModal] = useState(false);
  const [moveModal, setMoveModal] = useState(false);
  //모달 함수들(onEdit, onCancel, onConfirm)

  const onEdit = () => {
    basketItem.current.resetValue()
    setModal(true);
  };
  const onMove = () => {
    shoppingItem.current.resetValue()
    setMoveModal(true);
  };
  //냉장고로 이동시킬때 사용
  const onMoveConfirm = (id) => {
    DeleteBasketById(id);
    setMoveModal(false);
  };
  //수정할때 사용
  const onConfirm = () => {
    setModal(false);
  };
  const onCancel = () => {
    setModal(false);
    setMoveModal(false);
  };
  return (
    <ItemBlock>
      <MoveBtn onClick={onMove}>
        <MdKitchen/>
      </MoveBtn>
      <FridgeMoveModal
        ref={shoppingItem}
        visible={moveModal}
        onMoveConfirm={onMoveConfirm}
        onCancel={onCancel}
        ingredient={item}
        type="edit"
      />

      <div className="text" onClick={onEdit}>
        <Item>{name}</Item>
        <ItemIndex>{memo}</ItemIndex>
        <Item>
          <Count>
            <div className="count_num">{parseInt(count)}</div>
            <div className="count_unit">{unit}</div>
          </Count>
        </Item>
      </div>
      <ListModal
        ref={basketItem}
        SetBasket={SetBasket}
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        id={id}
        type="edit"
        item={item}
      />
      <Remove onClick={() => onRemove(id)}>
        <MdDelete/>
      </Remove>

    </ItemBlock>
  );
}

export default React.memo(BasketShoppingListItem);