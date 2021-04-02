import React from 'react';
import styled from 'styled-components';
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

const ItemBlock = styled.div`
  display: flex;
  padding: 10px 30px;
  align-items: center;
  font-size: 14px;

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

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .count_btn {
    font-size: 1.2rem;
    
  }
  .count_num {
    margin: 0 20px 0 20px;
    font-size: 1rem;
  }
`;

const BasketShoppingListItem = () => {
    return(
        <ItemBlock>
            <Item>재료재료</Item>
            <ItemIndex>부가설명</ItemIndex>
            <Item>
                <Count>
                    <div className="count_btn"><MdAddCircleOutline/></div>
                    <div className="count_num">1</div>
                    <div className="count_btn"><MdRemoveCircleOutline/></div>
                </Count>
            </Item>
        </ItemBlock>
    );
}

export default BasketShoppingListItem;