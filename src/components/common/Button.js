import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import palette from "../../lib/styles/palette";

const buttonStyle = css`
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 0.5rem;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  ${props =>
          props.logout &&
          css`
            background: ${palette.gray[4]};

            &:hover {
              background: ${palette.gray[6]};
            }
          `}
  
  ${props =>
          props.cyan &&
          css`
            background: ${palette.cyan[5]};

            &:hover {
              background: ${palette.gray[4]};
            }
          `}

  ${props =>
          props.inverted &&
          css`
            background: none;
            border: 2px solid #3C82D9;
            color: #3C82D9;
            &:hover {
              background: #B4CEFE;
            }
          `};

  ${props =>
          props.blueBtn &&
          css`
            background: #3c82d9;
            color: white;
            &:hover {
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.125);
            }
          `}
  ${props =>
          props.addBtn &&
          css`
            background: #3C82D9;
            &:hover {
              box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.125);
            }
          `
}

`;
const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0}/>
    ) : (
        <StyledButton {...props}/>
    );
};

export default Button;