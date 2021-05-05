import React, {useState} from 'react';
import styled from 'styled-components';
import {MdAddCircleOutline, MdRemoveCircleOutline,MdEdit,MdDelete} from "react-icons/md";
import ListModal from "./ListModal";
import FridgeModal from "../Fridge/FridgeModal";

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

  .count_btn {
    display: flex;
    font-size: 1rem;
    cursor: pointer;
  }

  .count_num {
    display: flex;
    margin: 0 20px 0 20px;
    font-size: 15px;
    text-align: center;
  }
`;


const BasketShoppingListItem = ({list, onRemove}) => {

  const {shopping_id, shopping_name, shopping_index, shopping_count,} = list;
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(shopping_count);
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
      <Item>{shopping_name}</Item>
      <ItemIndex>{shopping_index}</ItemIndex>
      <Item>
        <Count>
          <div className="count_btn" onClick={() => setValue(value - 1)}><MdRemoveCircleOutline/></div>
          <div className="count_num">{value}</div>
          <div className="count_btn" onClick={() => setValue(value + 1)}><MdAddCircleOutline/></div>
        </Count>
      </Item>
      <Remove onClick={() => onRemove(shopping_id)}>
        <MdDelete/>
      </Remove>
    </ItemBlock>
  );
}

export default BasketShoppingListItem;