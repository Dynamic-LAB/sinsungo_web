import "./Recipe.css";
import Whitebox from "../common/WhiteBox"
import styled from 'styled-components';
import TagBox from './TagBox';
import { MdSearch} from 'react-icons/md';
import RecipeCard from "./RecipeCard";
import React, {useState, useCallback} from 'react';
// import ice from "../../assets/ice.svg";
const Box1=styled(Whitebox)`
height:300px
`;
const Box2=styled.div`
margin:10px;
height:100%;
width:100%;
display: flex;
flex-direction: column;
`;
const Box3=styled(Whitebox)`
padding:10px;
margin-top:px;
height:20px;
width:96%;
border-radius: 4px;
box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.08);
font-weight:700;
color: #393939;
font-size: 16px;
`;


const Recipe = () => {
    const Box1=styled(Whitebox)`
    height:300px
    `;
    const Box2=styled.div`
    margin:10px;
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
    `;
    const Box3=styled(Whitebox)`
    padding:10px;
    margin-top:0px;
    height:20px;
    width:96%;
    `;
    const TagBox=styled(Whitebox)`
    display:inline-block;
    margin-right:15px;
    text-align:center;
    background:white;
    height:45%;
    overflow:hidden;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    `;
    const Imgbox=styled.div`
     background:#ffffff;
    `;
  
    const Box4=styled.div`
    padding:10px;
    margin-top:5px;
    height:60px;
    width:96%;
    flex: 1;

    font-weight: 500;
    color: #000000;
    font-size: 13px;
    @media only screen and (max-width: 978px) {
      font-size: 15px;
    }
    `;

const HasItem=styled.span`
color: #3c82d9;
`;
const NoneItem=styled.span`
color: #D93C3C;
`;
const Imgbox=styled.div`
 background:#ffffff;
`;
const OriImg=styled.img`
width:160px; 
border-radius: 10px;
`;
const SearchBar=styled.input.attrs({
	type: 'text',
    placeholder:'검색어를 입력해주세요',
})`
font-size: 16px;
    width:100%;
    height: auto;
    line-height: normal; 
    padding: .8em .5em;
    cursor: pointer;
    border: none;
    outline: none;

    
    @media only screen and (max-width: 978px) {
        font-size: 20px;
      }
`;

const Recipe = () => {
    const [modal, setModal] = useState(false);
    const popUp=()=>{
        setModal(true);
    }
    const CardSample = () => {
        const names = ['백숙', '치킨', '통닭', '바베큐','1','2','3','2','3','2','3','2','3'];
        const hasList = ['닭', '치즈', '양파'];
        const noneList = ['물', '얼음'];
        /*const recipeList = names.map((name,index) =>
         
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
        
        return (recipeList);*/
        
      };
        return(
        <main>
            <div className="recipe__container">

            <div className="searchCard">
                        <div className="searchCard_inner1">
                            <MdSearch  style={{'fontSize': '2.25rem'}} />
                            <SearchBar/>
                        </div>
                        <hr style={{
                             'borderTop': '1px dashed #bbb',
                             'borderBottom': '1px dashed #fff'

                        }}/>
                        <div className="searchCard_inner2">
                            <TagBox background={'#27D598'}></TagBox>
                            <TagBox background={'#27D598'}></TagBox>
                            <TagBox background={''}></TagBox>

                        </div>
                    </div>
                <br></br>
                <div className="NavCard">
                        <div className="card_inner">
                        <div className="icon-recpie"/>레시피
                        </div>
                </div>
                <div className="recipe__cards">
                    <RecipeCard
                    name={'백숙'}
                    hasList = {['닭', '치즈', '양파']}
                    noneList = {['물', '얼음']}
                    />
                      <RecipeCard
                    name={'치킨'}
                    hasList = {['닭', '치즈', '양파']}
                    noneList = {['물', '얼음']}
                    />
                      <RecipeCard
                    name={'통닭'}
                    hasList = {['닭', '치즈', '양파']}
                    noneList = {['물', '얼음']}
                    />
                </div>
 
            </div>
        </main>
    );
}

export default Recipe;