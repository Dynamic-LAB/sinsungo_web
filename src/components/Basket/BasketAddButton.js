import React, {useState,useRef} from 'react';
import styled from 'styled-components';
import {MdAdd} from "react-icons/md";
import DietModal from "./Diet/DietModal";
import ListModal from "./ListModal";
import GetBasketByRefrigratorId from "../ForServer/GetBasketByRefrigratorId"
import GetDietByRefrigratorId from "../ForServer/GetDietByRefrigratorId"
import {useShoppingDispatch} from "./ListContext";
import {useDietDispatch} from "./Diet/DietContext";
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
  transition: 0.125s all ease-in;
  &:hover {
    color: #3C82D9;
    transform: rotate(90deg);
  }
`;

const BasketAddButton = ({type}) => {
  const isChecked=useRef([]);
  const [modal, setModal] = useState(false);
  const dispatch= useShoppingDispatch();
  const dispatchDiet= useDietDispatch();
  const onAddClick = () => {
    isChecked.current=[];
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirmBasket = () => {
    if(JSON.parse(sessionStorage.getItem('User'))){
      GetBasketByRefrigratorId(
        {
            id:JSON.parse(sessionStorage.getItem('User')).newRefId,
            dispatch:dispatch
        }
        )}
        setModal(false);
      }

      const SetBasket = () => {
        if (JSON.parse(sessionStorage.getItem('User'))) {
          GetBasketByRefrigratorId(
            {
              id: JSON.parse(sessionStorage.getItem('User')).newRefId,
              dispatch: dispatch
            }
          )
        }
      }
  const onConfirmDiet = () => {
          if(JSON.parse(sessionStorage.getItem('User'))){
            GetDietByRefrigratorId(
              {
                  id:JSON.parse(sessionStorage.getItem('User')).newRefId,
                  dispatch:dispatchDiet
              }
              )}
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
          onConfirm={onConfirmDiet}
          onCancel={onCancel}
          type="add"
          isChecked={isChecked}
        />
      )}
      {type==='list' &&(
        <ListModal
          visible={modal}
          onConfirm={onConfirmBasket}
          onCancel={onCancel}
          SetBasket={SetBasket}
          type="add"
        />
      )}
    </>
  )
}
export default BasketAddButton;