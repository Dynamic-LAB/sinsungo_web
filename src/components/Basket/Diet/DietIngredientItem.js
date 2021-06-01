import React, { useState } from 'react';
import styled from 'styled-components';
import {MdRadioButtonUnchecked, MdRadioButtonChecked} from "react-icons/md";

const ItemBlock = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  font-size: 11px;
  .color_bar {
    width: 3px;
    height: 15px;
    margin-right: 20px;
    //유통기한에 따라 색 다르게
    background: #3C82D9;
    @media only screen and (max-width: 765px) {
      margin-right: 13px;
    }
    @media only screen and (max-width: 370px) {
      margin-right: 10px;
    }
  }
  `;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .fridge_category {
    width: 90px;
    @media only screen and (max-width: 765px) {
      width: 60px;
    }
    @media only screen and (max-width: 370px) {
      width: 40px;
    }
  }
  .ingredient_name {
    width: 265px;
    @media only screen and (max-width: 765px) {
      width: 150px;
    }
    @media only screen and (max-width: 370px) {
      width: 120px;
    }
  }
`;
const Check = styled.div`
  display: flex;
  align-items: center; //세로중앙정렬
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: #3C82D9;
`;

const DietIngredientItem = ({ingredient, onToggle}) => {
  const {id, name, amount, unit, expiration_date,category, expiration_type, today} = ingredient;
  const [checked,SetChecked]=useState(onToggle(id));
  return(
    <ItemBlock>
      <Item>
        <span className="fridge_category">{category}</span>
      </Item>
      <Item>
        {/*유통기한을 색으로 표시한 bar*/}
        <span className="color_bar"/>
      </Item>
      <Item>
        <span className="ingredient_name">{name}</span>
      </Item>
      <Check onClick={() => {SetChecked(onToggle(id,true))}}>
        {checked ? <MdRadioButtonChecked/> : <MdRadioButtonUnchecked/>}
      </Check>
    </ItemBlock>
  );
};

export default DietIngredientItem;