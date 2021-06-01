import React from 'react';

import styled from "styled-components";
import Button from "../../Button";

import WhiteBox from "../../WhiteBox";
import {MdClose} from "react-icons/md";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBlock = styled.div`
  background: #F6F6F6;
  height: auto;
  width: 350px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
`;
const ModalTitle = styled.div`
  display: flex;
  margin-bottom: 10px;

  h2 {
    font-size: 1.5rem;
    margin-top: 0;
  }
`;
const StyledWhiteBox = styled(WhiteBox)`
  height: auto;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 15px;
  h3 {
    font-size: 1rem;
    margin: 20px 5px;
  }
  .copy {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledInput = styled.input`
  height: 30px;
  outline: none;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid black;
  font-family: 'Noto Sans KR', sans-serif;
  &:hover {
    border-bottom: 1px solid #3C82D9;
  }
`;
const CopyButton = styled.button`
  text-align: center;
  width: 70px;
  outline: none;
  background: none;
  border: 2px solid #3C82D9;
  color: #3C82D9;
  border-radius: 10px;
  font-size: 13px;
  padding: 0.25rem 1.25rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  transition: .2s;
  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
    background: #3C82D9;
    color: #ffffff;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`;
const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;

const MemberModal  = ({ visible,
                        onCancel,}) => {
  if (!visible) return null;
    return(
      <Fullscreen>
        <ModalBlock>
          <ModalTitle>
            <h2>냉장고멤버</h2>
            <Spacer/>
            <CloseButton onClick={onCancel}>
              <MdClose/>
            </CloseButton>
          </ModalTitle>

          <StyledWhiteBox>
            <h3>링크</h3>
            <StyledInput
              readOnly
            />
            <div className="copy">
              <CopyButton>복사</CopyButton>
            </div>
          </StyledWhiteBox>
        </ModalBlock>
      </Fullscreen>

    );
};

export default MemberModal;