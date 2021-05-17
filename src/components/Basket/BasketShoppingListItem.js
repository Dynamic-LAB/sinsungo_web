import React, {useState} from 'react';
import styled from 'styled-components';
import {MdAddCircleOutline, MdRemoveCircleOutline,MdEdit,MdDelete} from "react-icons/md";
import ListModal from "./ListModal";
import FridgeModal from "../Fridge/FridgeModal";
import {useShoppingDispatch, useShoppingState} from "./ListContext";

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

`;
const Edit = styled.div`
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
`;
const ItemBlock = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  font-size: 13px;

  &:nth-child(even) {
    background: #f8f9fa;
  }
  &:hover {
    ${Remove} {
      opacity: 1;
    }
    ${Edit} {
      opacity: 1;
    }
  @media only screen and (max-width: 978px) {
    padding: 10px 15px;
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

  .count_num {
    display: flex;
    margin-left: 20px;
    font-size: 15px;
    text-align: center;
  }
  .count_unit {
    display: flex;
    margin-left: 10px;
    font-size: 15px;
    text-align: center;
  }
`;

const BasketShoppingListItem = ({id, name, memo, count, unit}) => {

  //const {shopping_id, shopping_name, shopping_index, shopping_count,} = list;
  const dispatch = useShoppingDispatch();
  //삭제 함수
  const onRemove = () =>
    dispatch({
      type: 'REMOVE',
      id
    });
  //모달 on, off 함수
  const [modal, setModal] = useState(false);

  //모달 함수들(onEdit, onCancel, onConfirm)
  const onEdit = () => {
    setModal(true);

  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    // onAdd();
  }

  return (
    <ItemBlock>
      <Edit onClick={onEdit}>
        <MdEdit/>
      </Edit>
      <ListModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        type="edit"
      />
      <Item>{name}</Item>
      <ItemIndex>{memo}</ItemIndex>
      <Item>
        <Count>
          <div className="count_num">{parseInt(count)}</div>
          <div className="count_unit">{unit}</div>
        </Count>
      </Item>
      <Remove onClick={() => onRemove(id)}>
        <MdDelete/>
      </Remove>
    </ItemBlock>
  );
}

export default React.memo(BasketShoppingListItem);