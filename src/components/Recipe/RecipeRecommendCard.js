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
  width: auto;
  border-radius: 10px;
`; //사진 넣을때 사용
const TestImg = styled.div`
  width: auto;
  height: 100px;
  border-radius: 10px;
  background: #61dafb;
`; //테스트로 넣어놓은것
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

const RecipeRecommendCard = () => {
  return(
    <StyledWhiteBox>
      <CardInner>
        <TestImg/> {/*테스트용 이미지*/}
        {/*<OriImg/>*/}
        <TextBlock>
          <ItemTitle>레시피 이름</ItemTitle>
        </TextBlock>
      </CardInner>

    </StyledWhiteBox>
  );
};

export default RecipeRecommendCard;