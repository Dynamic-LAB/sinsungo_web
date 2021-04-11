import React, {useState} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import SeasoningAddModal from "./SeasoningAddModal";

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
const SeasoningAddButton = () => {
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
      <SeasoningAddModal
        visible={modal}
        onCloseClick={onCloseClick}
      />
    </>
  );
};

export default SeasoningAddButton;