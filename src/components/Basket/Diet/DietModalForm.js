// import React from 'react';
// import styled from "styled-components";
// import WhiteBox from "../../common/WhiteBox";
// import DietMenuTag from "./DietMenuTag";
//
// const StyledWhiteBox = styled(WhiteBox)`
//   height: auto;
//   width: auto;
//   margin-top: 1rem;
//   margin-bottom: 1rem;
//   padding: 8px 16px ;
// `;
// const DateBlock = styled.div`
//   display: flex;
//   font-size: 16px;
//   align-items: center;
// `;
// const DateLeft = styled.div`
//
// `;
// const DateRight = styled.div`
//
// `;
// const MenuBlock = styled.div`
//   font-size: 16px;
//   align-items: center;
//   .diet_menu {
//     font-weight: bold;
//   }
// `;
// const IngredientBlock = styled.div`
//   font-size: 16px;
//   align-items: center;
//   .diet_ingredient{
//     font-weight: bold;
//   }
// `;
// //간격띄우기
// const Spacer = styled.div`
//   flex-grow: 1;
// `;
//
// const DietModalForm = () => {
//   return(
//     <>
//       {/*날짜박스*/}
//       <StyledWhiteBox>
//         <DateBlock>
//           <DateLeft>
//             <div className="date_left">
//               2021년 03월 30일
//             </div>
//           </DateLeft>
//           <Spacer/>
//           <DateRight>
//             <div className="date_right">
//               아침 식단
//             </div>
//           </DateRight>
//         </DateBlock>
//       </StyledWhiteBox>
//       {/*메뉴박스*/}
//       <StyledWhiteBox>
//         <MenuBlock>
//           <div className="diet_menu">메뉴</div>
//           <DietMenuTag/>
//         </MenuBlock>
//       </StyledWhiteBox>
//       {/*재료박스*/}
//       <StyledWhiteBox>
//         <IngredientBlock>
//           <div className="diet_ingredient">재료</div>
//         </IngredientBlock>
//       </StyledWhiteBox>
//
//     </>
//   );
// }
//
// export default DietModalForm;