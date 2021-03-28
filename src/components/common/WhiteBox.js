// 공통으로 사용 하는 흰색 박스
import React from 'react';
import styled from 'styled-components';

const StyledWhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.08);
  
`;

const WhiteBox = props => <StyledWhiteBox {...props}/>;

export default WhiteBox;