import "./Recipe.css";
import WhiteBox from "../common/WhiteBox"
import styled from 'styled-components';
import {MdSearch} from 'react-icons/md';
import RecipeCard from "./RecipeCard";
import React, {useState, useEffect, useRef} from 'react';
import axios from "../../../node_modules/axios/index";
import Footer from "../common/Footer";

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
  placeholder: '검색어를 입력해주세요(2글자 이상)',
})`
  font-size: 16px;
  width: 100%;
  height: auto;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  font-family: 'Noto Sans KR', sans-serif;
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
const EmptyEmptyBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const EmptyBlock = styled.div`
  text-align: center;
  //margin-left: 230px;
  width: 200px;

  .empty_image {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .empty_text {
    text-align: center;
    font-size: 20px;
  }

  @media only screen and (max-width: 765px) {
    width: 150px;
    display: block;
    margin: 0 auto;
    .empty_text {
      font-size: 15px;
    }
  }
`;

const Recipe = () => {
  const range = useRef(null);
  const target = useRef(null);
  const waitTime = useRef(null);
  const wordExist = useRef(null);
  const list = useRef(null);
  const [recipeData, SetRecipeData] = useState();
  const [searchWord, SetSearchWord] = useState("");

  async function GetRecipe(startPoint, endPoint, query = "") {
    if (query.length >= 0) {
      list.current.push(query)
    }
    if (waitTime.current === false) {
      waitTime.current = true;
      const res = await axios.get(" recipe/" + (JSON.parse(sessionStorage.getItem('User')) ? JSON.parse(sessionStorage.getItem('User')).newRefId : 0), {
        params: {start: startPoint, end: endPoint, query: query}
      });
      if (list.current.length >= 0 && list.current[list.current.length - 1] !== query) {
        let tmp = list.current[list.current.length - 1];
        list.current = [];
        waitTime.current = false;
        console.log(tmp, " 으로 재검색")
        await GetRecipe(startPoint, endPoint, tmp);
        return;
      }
      SetRecipeData(res.data)
      waitTime.current = false;
    }
  }

  const HandleScroll = () => {
    target.current = document.getElementById('target');
    if (target.current.scrollTop + target.current.clientHeight >= target.current.scrollHeight) {
      if (wordExist.current === false) {
        range.current = range.current + 6;
        GetRecipe(1, range.current);
      } else {

      }
    }
  }
  useEffect(() => {
    list.current = [];
    range.current = 20;
    waitTime.current = false;
    wordExist.current = false;
    document.getElementById('target').addEventListener('scroll', HandleScroll);
    GetRecipe(1, range.current);
  }, [])
  useEffect(() => {
    if (searchWord.length >= 1) {
      wordExist.current = true;
    } else {
      wordExist.current = false;
    }
    GetRecipe(1, range.current, searchWord);

  }, [searchWord])

  return (
    <main id='target'>
      <div className="recipe__container">
        <WhiteBoxTop>
          <SearchBlock>
            <div className="icon_search"><MdSearch/></div>
            <SearchBar onChange={(e) => {
              SetSearchWord(e.target.value)
            }}/>
          </SearchBlock>
        </WhiteBoxTop>
        <WhiteBoxRecipe>

          <RecipeTitle>
            <div className="icon__recipe"/>
            <h2>레시피</h2>
          </RecipeTitle>
          <RecipeBlock>
            <div className="recipe__cards">
              {
                recipeData && recipeData.length > 0 ? recipeData.map((item) => {
                    return (
                      <RecipeCard
                        thumbnail={item.thumbnail}
                        url={item.url}
                        description={item.description}
                        name={item.name}
                        hasList={item.inRefIngredients}
                        noneList={item.notInRefIngredients}
                      />
                    )
                  }) :
                  <EmptyBlock>
                    <div className="empty_text">레시피가 없습니다!</div>
                  </EmptyBlock>
              }
            </div>
          </RecipeBlock>
        </WhiteBoxRecipe>
        <footer>
          <Footer/>
        </footer>
      </div>
    </main>
  );
}
export default Recipe;