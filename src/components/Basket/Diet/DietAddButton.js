import React, {useState} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import DietModal from "./DietModal";

const AddButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;

  &:hover {
    color: #3C82D9;
  }
`;

const DietAddButton = () => {
  const [modal, setModal] = useState(false);
  const onAddClick = () =>{
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    // onAdd();
  };
  const onCloseClick = () => {
    setModal(false);
  }

  return(
    <>
      <AddButton onClick={onAddClick}>
        <MdAdd/>
      </AddButton>
      <DietModal
        visible={modal}
        onCloseClick={onCloseClick}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}

export default DietAddButton;