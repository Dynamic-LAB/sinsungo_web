import React from 'react';
import styled from 'styled-components';
import Responsive from "./Responsive";
import {Link} from 'react-router-dom';
import {MdKitchen, MdPersonOutline, MdShoppingBasket, MdRestaurant} from 'react-icons/md';

const HeaderBlock = styled.div`
  position: fixed;
  height: 100%;
  background: #B4CEFE;
`;

const Wrapper = styled(Responsive)`
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  .logo {
    font-size: 2rem;
    font-family: "Yoon® 독립", cursive;
    color: white;
    font-weight: 500; /*글자 굵기*/
    letter-spacing: 10px; /*글자 사이 간격*/
  }
`;
// WrapperMenu 이 부분 이렇게 말고 다른 방법이 있을것 같은데
const WrapperMenu = styled.div`
  margin-top: 1rem;
  align-content: center;

  .fridge {
    display: flex;
    padding: 1rem;

    svg {
      font-size: 1.5rem;
    }

    .text {
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }

    &:hover {
      background: #3C82D9;
    }
  }

  .basket {
    display: flex;
    padding: 1rem;

    svg {
      font-size: 1.5rem;
    }

    .text {
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }

    &:hover {
      background: #3C82D9;
    }
  }

  .recipe {
    display: flex;
    padding: 1rem;

    svg {
      font-size: 1.5rem;
    }

    .text {
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }

    &:hover {
      background: #3C82D9;
    }
  }

  .my {
    display: flex;
    padding: 1rem;

    svg {
      font-size: 1.5rem;
    }

    .text {
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }

    &:hover {
      background: #3C82D9;
    }
  }
`;


const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        신선고
                    </Link>
                </Wrapper>
                <WrapperMenu>
                    <Link to="/fridge" className="fridge">
                        <MdKitchen/>
                        <div className="text">냉장고</div>
                    </Link>
                    <Link to="/basket" className="basket">
                        <MdShoppingBasket/>
                        <div className="text">장바구니</div>
                    </Link>
                    <Link to="/recipe" className="recipe">
                        <MdRestaurant/>
                        <div className="text">레시피</div>
                    </Link>
                    <Link to="/my" className="my">
                        <MdPersonOutline/>
                        <div className="text">마이페이지</div>
                    </Link>
                </WrapperMenu>
            </HeaderBlock>
        </>
    );
};

export default Header;