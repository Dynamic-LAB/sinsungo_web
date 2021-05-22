import React, {useState} from 'react';
import styled from 'styled-components';
import DietModal from "../../Basket/Diet/DietModal";

const ItemBlock = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  font-size: 11px;
  cursor: pointer;
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:hover {
    background: #dee2e6;
  }
  `;
const ItemDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;
const ItemMemo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 10px;
`;
const Spacer = styled.div`
  flex-grow: 1;
`;

const RecipeDietDateItem = ({date, finalClose}) => {
  const {diet_date, diet_memo} = date;
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  }
  //확인, 취소 버튼
  const onConfirm = () => {
    setOpen(false);
    finalClose();
  };
  const onCancel = () => {
    setOpen(false);
    finalClose();
  };

  return(
    <>
      <ItemBlock onClick={onOpen}>
        <ItemDate>{diet_date}</ItemDate>
        <Spacer/>
        <ItemMemo>{diet_memo}</ItemMemo>
      </ItemBlock>
      <DietModal
        visible={open}
        onConfirm={onConfirm}
        onCancel={onCancel}
        type="edit"
      />
    </>
  );
}
export default RecipeDietDateItem;