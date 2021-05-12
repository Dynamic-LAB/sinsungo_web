import "./Recipe.css";
import WhiteBox from "../common/WhiteBox"
import styled from 'styled-components';
import TagBox from './TagBox';
import {MdSearch} from 'react-icons/md';
import RecipeCard from "./RecipeCard";
import React, {useState, useCallback} from 'react';
// import ice from "../../assets/ice.svg";

const WhiteBoxTop = styled(WhiteBox)`
  height: auto;
  margin-bottom: 20px;
`;
const SearchBlock = styled.div`
  display: flex;

  .icon_search {
    display: flex;
    font-size: 2rem;
    padding: 10px;
  }
`;
const WhiteBoxRecipe = styled(WhiteBox)`
  height: 100%;
`;
const RecipeBlock = styled.div`
  overflow-y: auto; //스크롤
`;
const SearchBar = styled.input.attrs({
  type: 'text',
  placeholder: '검색어를 입력해주세요',
})`
  font-size: 16px;
  width: 100%;
  height: auto;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  @media only screen and (max-width: 978px) {
    font-size: 14px;
  }
`;
const RecipeTitle = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  font-size: 10px;
  border-bottom: 1px solid #bbbbbb;
`;
const Recipe = () => {
  const [modal, setModal] = useState(false);
  const popUp = () => {
    setModal(true);
  }
  /* const CardSample = () => {
       const names = ['백숙', '치킨', '통닭', '바베큐','1','2','3','2','3','2','3','2','3'];
       const hasList = ['닭', '치즈', '양파'];
       const noneList = ['물', '얼음'];
       const recipeList = names.map((name,index) =>

           <div onClick={popUp} className="card" key={index}>
                  <div>{index}</div>
                   <RecipeModal
                   visible={modal}
                   onConfirm={()=>setModal(false)}
                   onCancel={()=>setModal(false)}
                   />
           <div className="card_inner">
               <OriImg src={process.env.PUBLIC_URL + '/img.jpg'} alt="오류"/>
               <Box2>
                   <Box3>{name}</Box3>
                   <Box4>
                       <HasItem>냉장고 속 재료 │</HasItem> {hasList.map((n,_i)=>{return n+(_i<hasList.length-1?',':'')})}
                       <br></br>
                       <NoneItem>없는 재료 │</NoneItem> {noneList.map((n,_i)=>{return n+(_i<noneList.length-1?',':'')})}
                   </Box4>
               </Box2>
           </div>
       </div>);

       return (recipeList);

     };*/
  return (
    <main>
      <div className="recipe__container">
        <WhiteBoxTop>
          <SearchBlock>
            <div className="icon_search"><MdSearch/></div>
            <SearchBar/>
          </SearchBlock>
        </WhiteBoxTop>

        <WhiteBoxRecipe>

          <RecipeTitle>
            <div className="icon__recipe"/>
            <h2>레시피</h2>
          </RecipeTitle>
          <RecipeBlock>
            <div className="recipe__cards">
              <RecipeCard
                name={'백숙'}
                hasList={['닭', '치즈', '양파']}
                noneList={['물', '얼음']}
              />
              <RecipeCard
                name={'치킨'}
                hasList={['닭', '치즈', '양파']}
                noneList={['물', '얼음']}
              /> <RecipeCard
              name={'치킨'}
              hasList={['닭', '치즈', '양파']}
              noneList={['물', '얼음']}
            />
              <RecipeCard
                name={'통닭'}
                hasList={['닭', '치즈', '양파']}
                noneList={['물', '얼음']}
              />
            </div>
          </RecipeBlock>
        </WhiteBoxRecipe>
      </div>
    </main>
  );
}
export default Recipe;