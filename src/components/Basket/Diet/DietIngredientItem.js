import React from 'react';
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
  }
  `;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .fridge_category {
    width: 90px;
  }
  .ingredient_name {
    width: 265px;
  }
`;
const Check = styled.div`
  display: flex;
  align-items: center; //세로중앙정렬
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: #9e9e9e;
`;
const DietIngredientItem = ({ingredient, onToggle}) => {
  const {checked, id, fridge_category, ingredient_name} = ingredient;
  return(
    <ItemBlock>
      <Item>
        <span className="fridge_category">{fridge_category}</span>
      </Item>
      {/*유통기한을 색으로 표시한 bar*/}
      <span className="color_bar"/>
      <Item>
        <span className="ingredient_name">{ingredient_name}</span>
      </Item>
      <Check onClick={() => onToggle(id)}>
        {checked ? <MdRadioButtonChecked/> : <MdRadioButtonUnchecked/>}
      </Check>
    </ItemBlock>
  );
};

export default DietIngredientItem;