import React, {useState} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import DietModal from "./Diet/DietModal";
import ListModal from "./ListModal";

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  margin-left: 10px;
  &:hover {
    color: #3C82D9;
  }
`;

const BasketAddButton = ({type}) => {
  const [modal, setModal] = useState(false);

  const onAddClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    // onAdd();
  }

  return(
    <>
      <AddButton onClick={onAddClick}>
        <MdAdd/>
      </AddButton>
      {type==='diet' &&(
        <DietModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
          type="add"
        />
      )}
      {type==='list' &&(
        <ListModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </>
  )
}
export default BasketAddButton;