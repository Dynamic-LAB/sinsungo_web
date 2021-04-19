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
  &:hover {
    background: #D6D6D6;
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

const FridgeItem = (props) => {
    return (
        <ItemBlock>
            <Item>{props.name}</Item>
            <Item>{props.count}</Item>
            <Item>{props.date}</Item>
            <Item>{props.deadline}</Item>
        </ItemBlock>
    );
}

export default FridgeItem;