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
const ItemIndex = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  font-size: 10px;
  color: #27D598;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 978px){
    font-size: 8px;
  }
`;
const AddButton = styled.button`
  display: flex;
  width: 40%;
  border: none;
  padding: 0.35rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #3C82D9;
`;

const BasketRecommendItem = () => {
    return (
        <ItemBlock>
            <Item>재료재료</Item>
            <ItemIndex>부가설명</ItemIndex>
            <Item><AddButton>추가</AddButton></Item>
        </ItemBlock>
    );
}

export default BasketRecommendItem;