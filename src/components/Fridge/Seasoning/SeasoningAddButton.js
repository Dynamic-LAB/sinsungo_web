import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import SeasoningModal from "./SeasoningModal";

const AddButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
  
  border: none;
  outline: none;
  background: none;
`;
const SeasoningAddButton = (onAdd) => {
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
            <SeasoningModal
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </>
    );
};

export default SeasoningAddButton;