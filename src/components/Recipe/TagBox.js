// 공통으로 사용 하는 흰색 박스
import React from 'react';
import styled from 'styled-components';
import Whitebox from "../common/WhiteBox"
const StyledWhiteBox =styled(Whitebox)`
display:inline-block;
margin-top:20px;
margin-right:15px;
padding-left:10px;
padding-right:10px;
text-align:center;
background: ${(props)=>props.background ||"#70707080"};
height:25px;
overflow:hidden;
border-radius: 10px;
font-size: 13px;
@media only screen and (max-width: 978px) {
font-size: 15px;
}
`;
const TagBox = props => <StyledWhiteBox {...props}/>;

export default TagBox;