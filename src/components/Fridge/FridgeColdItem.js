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

  ////엘리먼트 사이사이에 테두리 넣어 줌
  //& + & {
  //  border-top: 1px solid #bbbbbb;
  //}
`;

const Item = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

const FridgeColdItem = () => {
    return (
        <ItemBlock>
            <Item><div className="name">재료재료재료재료</div></Item>
            <Item><div className="item_count">3</div></Item>
            <Item><div className="date">2021.04.01</div></Item>
            <Item><div className="deadline">4일</div></Item>
        </ItemBlock>
    );
}

export default FridgeColdItem;