import React from 'react';
import styled from 'styled-components';
import Responsive from "./Responsive";
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  height: 100%;
  background: #3c82d9;
  
`;

const Wrapper = styled(Responsive)`
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  .logo {
    font-size: 1.825rem;
    color: white;
    font-weight: 500; /*글자 굵기*/
    letter-spacing: 10px; /*글자 사이 간격*/
  }
`;

const Header = () => {
    return(
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        신선고
                    </Link>
                </Wrapper>
            </HeaderBlock>
        </>
    );
};

export default Header;