import React from 'react';
import styled from "styled-components";
import WhiteBox from "../../common/WhiteBox";

const DateWhiteBox = styled(WhiteBox)`
  height: 50px;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 8px 16px ;
`;
const DateBlock = styled.div`
  display: flex;
  align-items: center;
`;
const DietModalForm = () => {
  return(
    <>
      <DateWhiteBox>
        <DateBlock>

        </DateBlock>
      </DateWhiteBox>
    </>
  );
}

export default DietModalForm;