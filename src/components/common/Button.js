import React from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import palette from "../../lib/styles/palette";

const buttonStyle = css`
  border: none;
  border-radius: 2px;
  font-size: 0.5rem;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  
  background: ${palette.gray[4]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${props => 
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${props => 
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.gray[4]};
      }
    `}
`;
const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1:0}/>
    ) : (
        <StyledButton {...props}/>
    );
};

export default Button;