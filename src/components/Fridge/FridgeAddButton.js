import React, {useState} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import FridgeAddModal from "./FridgeAddModal";

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
    transform: rotate(90deg);
  }
  @media only screen and (max-width: 978px) {
    font-size: 1.15rem;
  }
`;

const FridgeAddButton = ({type}) => {

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
      {type==='cold' &&(
        <FridgeAddModal
          visible={modal}
          onCloseClick={onCloseClick}
          type="cold"
        />
      )}
      {type==='freeze' &&(
        <FridgeAddModal
          visible={modal}
          onCloseClick={onCloseClick}
          type="freeze"
        />
      )}
      {type==='fresh' &&(
        <FridgeAddModal
          visible={modal}
          onCloseClick={onCloseClick}
          type="fresh"
        />
      )}
      {type==='temp' &&(
        <FridgeAddModal
          visible={modal}
          onCloseClick={onCloseClick}
          type="temp"
        />
      )}
      {type==='seasoning' &&(
        <FridgeAddModal
          visible={modal}
          onCloseClick={onCloseClick}
          type="seasoning"
        />
      )}
    </>
  );
};

export default FridgeAddButton;