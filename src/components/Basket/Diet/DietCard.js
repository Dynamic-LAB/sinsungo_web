import React, {useState} from 'react';
import styled from 'styled-components';
import WhiteBox from "../../common/WhiteBox";
import DietItem from "./DietItem";
import DietModal from "./DietModal";

const StyledWhiteBox = styled(WhiteBox)`
  height: auto;
  margin: 15px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
  cursor: pointer;
  &:hover{
    border: 1px dashed #bcbcbc;
  }
`;
const DietBlock = styled.div`
  padding: 10px;
`;

const DietCard = () => {
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
  };
  return(
    <>
      <StyledWhiteBox onClick={onEdit}>
        <DietBlock>
          <DietItem
            date="2021년 04월 11일"
            memo="아침메뉴"
            food={['김치찌개', '두루치기', '멸치']}
            ingredient_item={['김치', '고기', '멸치', '참치']}
          />
        </DietBlock>
      </StyledWhiteBox>
      <DietModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        type="edit"
      />
    </>

  );
}

export default DietCard;