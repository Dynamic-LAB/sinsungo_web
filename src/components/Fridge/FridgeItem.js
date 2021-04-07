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

const FridgeItem = ({name, count, date, deadline}) => {
    return (
        <ItemBlock>
            <Item>{name}</Item>
            <Item>{count}</Item>
            <Item>{date}</Item>
            <Item>{deadline}</Item>
        </ItemBlock>
    );
}

export default FridgeItem;