import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import MemberModal from "./MemberModal";

const AddButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
  
  border: none;
  outline: none;
  background: none;
  transition: 0.125s all ease-in;
  &:hover {
    color: #3C82D9;
    transform: rotate(90deg);
  }
`;

const MemberAddButton = (onAdd) => {
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
    }

    return(
        <>
            <AddButton onClick={onAddClick}>
                <MdAdd/>
            </AddButton>
            <MemberModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </>


    );
}

export default MemberAddButton;