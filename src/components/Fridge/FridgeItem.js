import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {MdEdit, MdDelete} from "react-icons/md";
import FridgeModal from "./FridgeModal";
import GetIngredientByRefrigratorId from '../ForServer/GetIngredientByRefrigratorId';
import {Context} from '../../Ingredient';
import "./Fridge.css";

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

  @media only screen and (min-width: 976px) and (max-width: 1500px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 630px) {
    font-size: 0.875rem;
  }
`;
const Edit = styled.div`
  display: flex;
  align-items: center; //세로중앙정렬
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 6px;
  color: #dee2e6;
  opacity: 0;

  &:hover {
    color: #626262;
  }

  @media only screen and (min-width: 976px) and (max-width: 1500px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 630px) {
    font-size: 0.875rem;
  }
`;

const ItemBlock = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  font-size: 12px;

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

  }

  @media only screen and (min-width: 976px) and (max-width: 1500px) {
    padding: 10px 10px;
  }
  @media only screen and (max-width: 630px) {
    padding: 10px 6px;
  }
`;

const Item = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 976px) and (max-width: 1500px) {
    font-size: 9px;
  }
  @media only screen and (max-width: 630px) {
    font-size: 9px;
  }
`;
const FridgeItem = ({ingredient, onRemove}) => {

  const {id, name, amount, unit, expiration_date, manufacture, expiration_type, today} = ingredient;
  const [modal, setModal] = useState(false);
  const onEdit = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const {state, dispatch} = useContext(Context);
  const onConfirm = () => {
    if (JSON.parse(sessionStorage.getItem('User'))) {
      GetIngredientByRefrigratorId(
        {
          id: JSON.parse(sessionStorage.getItem('User')).newRefId,
          dispatch: dispatch
        }
      )
    }
    ;
    setModal(false);
  }
  var day = new Date(today);
  var myDate = (new Date(day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate()) - new Date(expiration_date.replaceAll('-', '/'))) / 24 / 3600 / 1000 * -1;
  return (
    <>
      <ItemBlock>
        <Edit onClick={onEdit}>
          <MdEdit/>
        </Edit>
        <FridgeModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
          ingredient={ingredient}
          type="edit"/>
        <Item>{name}</Item>
        <Item>{amount + unit}</Item>
        {expiration_type === "유통기한" ?
          <Item>{expiration_date}({myDate})</Item> : <Item>-</Item>
        }
        {expiration_type === "제조일자" ?
          <Item>{expiration_date}</Item> : <Item>-</Item>
        }
        {expiration_type === "보관일" ?
          <Item>{expiration_date}</Item> : <Item>-</Item>
        }
        <Remove onClick={() => onRemove(id)}>
          <MdDelete/>
        </Remove>
      </ItemBlock>
    </>
  );
}

export default FridgeItem;