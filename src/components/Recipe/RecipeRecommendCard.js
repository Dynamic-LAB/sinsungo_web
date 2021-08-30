import React from "react";
import styled from "styled-components";
import WhiteBox from "../common/WhiteBox";

const StyledWhiteBox = styled(WhiteBox)`
  height: auto;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
  cursor: pointer;
`;
const CardInner = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const OriImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  display:block;
  margin:auto;
  @media only screen and (max-width: 1200px) {
    width: 135px;
    height: 135px;
  }
  @media only screen and (max-width: 800px) {
    width: 130px;
    height: 130px;
  }
  @media only screen and (max-width: 600px) {
    width: 140px;
    height: 140px;
  }
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemTitle = styled.div`
  display: block; //내용이 칸 넘어가면 자동으로 줄바꿈
  padding-top: 8px;
  font-size: 15px;
  font-weight: 700;
  @media only screen and (max-width: 978px) {
    font-size: 13px;
  }
`;

const RecipeRecommendCard = ({
  setRecommendData,
  modalOn,
  thumbnail,
  url,
  description,
  name,
  hasList,
  noneList
}) => {
  const click=()=>{
    setRecommendData(thumbnail,url,description,name,hasList,noneList)
    modalOn()
  }
  
  return(
    <>
    <StyledWhiteBox onClick={()=>click()}>
      <CardInner>
      <OriImg src={thumbnail} alt="No Image"/>
        <TextBlock>
          <ItemTitle>{name}</ItemTitle>
        </TextBlock>
      </CardInner>
    </StyledWhiteBox>
   
        </>
  );
};

export default RecipeRecommendCard;