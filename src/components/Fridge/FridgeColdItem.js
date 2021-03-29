import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
  display: flex;
  padding: 10px 30px;
  align-items: center;
  font-size: 13px;

  &:nth-child(even) {
    background: #f8f9fa;
  }
  @media only screen and (max-width: 978px){
    padding: 10px 20px;
  }

`;

const Item = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 978px){
    font-size: 10px;
  }
`;

const FridgeColdItem = () => {
    return (
        <ItemBlock>
            <Item>재료재료재료재료</Item>
            <Item>3</Item>
            <Item>2021.04.01</Item>
            <Item>4일</Item>
        </ItemBlock>
    );
}

export default FridgeColdItem;