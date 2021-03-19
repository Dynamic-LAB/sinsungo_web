import React from 'react';
import styled from 'styled-components';
import Responsive from "./Responsive";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.08);
`;
const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;
  
`;
const Spacer = styled.div`
  height: 5.5rem;
`;


const Navi = () => {
    return(
        <>
            <HeaderBlock>
                <Wrapper>
                    <div>네비게이션</div>
                </Wrapper>
            </HeaderBlock>
            <Spacer/>
        </>
    );
};
export default Navi;