import React from 'react';
import styled from 'styled-components';
import Button from "../common/Button";
import {MdDelete} from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center; //세로중앙정렬
  justify-content: center;
  color: #dee2e6;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
  }
`;

const ItemBlock = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  font-size: 13px;

  &:nth-child(even) {
    background: #f8f9fa;
  }
  &:hover {
    ${Remove} {
      opacity: 1;
    }
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
  text-align: center;
  border-radius: 20px;
  padding: 0.35rem 10px;
  @media only screen and (max-width: 978px){
    padding: 0.35rem 0.5rem;
  }
`;

const BasketRecommendItem = ({recommend, onRemove}) => {
  const {recommend_id, recommend_name, recommend_index,}=recommend;
    return (
        <ItemBlock>
          <Remove onClick={() => onRemove(recommend_id)}>
            <MdDelete/>
          </Remove>
            <Item>{recommend_name}</Item>
            <ItemIndex>{recommend_index}</ItemIndex>
            <Item><AddButton addBtn>추가</AddButton></Item>
        </ItemBlock>
    );
}

export default BasketRecommendItem;