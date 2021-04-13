import React from 'react';
import styled from 'styled-components';
import WhiteBox from "../../common/WhiteBox";
import DietItem from "./DietItem";

const StyledWhiteBox = styled(WhiteBox)`
  height: 100px;
  margin: 15px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.125);
`;
const DietBlock = styled.div`
  padding: 10px;
`;

const Diet = () => {
  return(
    <StyledWhiteBox>
      <DietBlock>
        <DietItem/>
      </DietBlock>
    </StyledWhiteBox>
  );
}

export default Diet;