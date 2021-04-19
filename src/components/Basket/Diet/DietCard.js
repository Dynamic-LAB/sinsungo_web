import React from 'react';
import styled from 'styled-components';
import WhiteBox from "../../common/WhiteBox";
import DietItem from "./DietItem";

const StyledWhiteBox = styled(WhiteBox)`
  height: 100px;
  margin: 15px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
  &:hover{
    border: 1px dashed #bcbcbc;
  }
`;
const DietBlock = styled.div`
  padding: 10px;
`;

const DietCard = () => {
  return(
    <StyledWhiteBox>
      <DietBlock>
        <DietItem
          date="2021년 04월 11일"
          choice="아침"
          menu="메뉴는"
          food={['김치찌개', '두루치기', '멸치']}
          ingredient="주재료"
          ingredient_item={['김치', '고기', '멸치', '참치']}
        />
      </DietBlock>
    </StyledWhiteBox>
  );
}

export default DietCard;