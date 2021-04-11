import React, {useState} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import FreezeAddModal from "./FreezeAddModal";

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
const FreezeAddButton = () => {
  const [modal, setModal] = useState(false);
  const onAddClick = () => {
    setModal(true);
  };
  const onCloseClick = () => {
    setModal(false);
  }

  return (
    <>
      <AddButton onClick={onAddClick}>
        <MdAdd/>
      </AddButton>
      <FreezeAddModal
        visible={modal}
        onCloseClick={onCloseClick}
      />
    </>
  );
};

export default FreezeAddButton;