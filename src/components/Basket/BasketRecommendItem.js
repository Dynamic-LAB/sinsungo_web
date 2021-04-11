import React from 'react';
import styled from 'styled-components';
import Button from "../common/Button";

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
const AddButton = styled(Button)`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 0.35rem 0.75rem;
  @media only screen and (max-width: 978px){
    padding: 0.35rem 0.5rem;
  }
`;

const BasketRecommendItem = () => {
    return (
        <ItemBlock>
            <Item>재료재료</Item>
            <ItemIndex>부가설명</ItemIndex>
            <Item><AddButton addBtn>추가</AddButton></Item>
        </ItemBlock>
    );
}

export default BasketRecommendItem;