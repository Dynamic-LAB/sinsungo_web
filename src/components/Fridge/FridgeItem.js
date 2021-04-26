import React, {useState} from 'react';
import styled from 'styled-components';
import {MdCheckBox,MdCheckBoxOutlineBlank,MdEdit,MdDelete} from "react-icons/md";
import FridgeAddModal from "./FridgeAddModal";
import FridgeModal from "./FridgeModal";

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
    
  }
  @media only screen and (max-width: 978px) {
    padding: 10px 20px;
  }
`;

const Item = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 978px) {
    font-size: 10px;
  }
`;

const FridgeItem = ({ingredient, onRemove}) => {

  const {id, nameF, countF, dateF, deadlineF} = ingredient;
  const [modal, setModal] = useState(false);
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
    <>
      <ItemBlock>
        <Edit onClick={onEdit}>
          <MdEdit/>
        </Edit>
        <FridgeModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
          type="edit"
        />
        <FridgeModal/>
        <Item>{nameF}</Item>
        <Item>{countF}</Item>
        <Item>{dateF}</Item>
        <Item>{deadlineF}</Item>
        <Remove onClick={() => onRemove(id)}>
          <MdDelete/>
        </Remove>

      </ItemBlock>

    </>

  );
}

export default FridgeItem;