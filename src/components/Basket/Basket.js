import React, {useCallback, useState} from "react";
import "./Basket.css";
import styled from 'styled-components';
import WhiteBox from "../common/WhiteBox";
import BasketRecommendItem from "./BasketRecommendItem";
import BasketShoppingListItem from "./BasketShoppingListItem";
import DietCard from "./Diet/DietCard";
import BasketAddButton from "./BasketAddButton";
import DietModal from "./Diet/DietModal";
import BasketList from "./BasketList";

const WhiteBoxDiet = styled(WhiteBox)`
  height: 765px;
`;
const WhiteBoxBasket = styled(WhiteBox)`
  height: 370px
`;
const BasketTitle = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  font-size: 10px;
  border-bottom: 1px solid #C9C9C9;

  @media only screen and (max-width: 978px) {
    padding: 10px 20px;
  }
`;
const DietBlock = styled.div`
  overflow-y: auto; //스크롤
  padding: 10px 20px;
`;
const IngredientBlock = styled.div`
  overflow-y: auto; //스크롤
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Basket = () => {

  // 재료추천
  const [recommends, setRecommends] = useState([
    {
      recommend_id: 1,
      recommend_name: '추천재료1',
      recommend_index: '부가설명',
    },

  ]);
  //장보기 목록
  const [lists, setLists] = useState([
    {
      shopping_id: 1,
      shopping_name: '재료1',
      shopping_index: '부가설명',
      shopping_count: 0,
    },
    {
      shopping_id: 2,
      shopping_name: '재료2',
      shopping_index: '부가설명',
      shopping_count: 0,
    },
  ]);
  //지우기 기능
  const onRemove = useCallback(
    id => {
      setLists(lists.filter(lists => lists.shopping_id !==id));
    },
    [lists],
  );

  return (
    <basket>
      <div className="basket__container">
        <div className="fridge__cards">
          <div className="diet">
            <WhiteBoxDiet>
              <BasketTitle>
                <div className="icon-diet"/>
                <h2>식단</h2>
                <Spacer/>
                <BasketAddButton type="diet"/>
              </BasketTitle>
              <DietBlock>
                <DietCard/>
              </DietBlock>
            </WhiteBoxDiet>
          </div>

          <div className="ingredient_recommend">
            <WhiteBoxBasket>
              <BasketTitle>
                <h2>이 재료도 추가하시는건 어때요?</h2>
              </BasketTitle>
              <IngredientBlock>
                <BasketList recommends={recommends} lists={lists} onRemove={onRemove} type="recommend"/>
              </IngredientBlock>
            </WhiteBoxBasket>
          </div>
          <div className="shopping_list">
            <WhiteBoxBasket>
              <BasketTitle>
                <h2>장 볼 목록</h2>
                <BasketAddButton type="list"/>
                <Spacer/>
                <div className="icon-share"/>
              </BasketTitle>
              <IngredientBlock>
                {/*<BasketShoppingListItem/>*/}
                <BasketList recommends={recommends} lists={lists} onRemove={onRemove} type="list"/>
              </IngredientBlock>
            </WhiteBoxBasket>
          </div>
        </div>
      </div>
    </basket>
  );
}

export default Basket;