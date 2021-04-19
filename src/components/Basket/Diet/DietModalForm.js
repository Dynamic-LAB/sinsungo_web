import React from 'react';
import styled from "styled-components";
import WhiteBox from "../../common/WhiteBox";

const DateWhiteBox = styled(WhiteBox)`
  height: auto;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 8px 16px ;
`;
const DateBlock = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  
`;
const DateLeft = styled.div`
  
`;
const DateRight = styled.div`
  
`;
const DietModalForm = () => {
  return(
    <>
      <DateWhiteBox>
        <DateBlock>
          <DateLeft>
            <div className="date_left">
              2021년 03월 30일
            </div>
          </DateLeft>
          <DateRight>
            <div className="date_right">
              아침 식단
            </div>
          </DateRight>
        </DateBlock>
      </DateWhiteBox>
    </>
  );
}

export default DietModalForm;