import React, { useState , useContext} from 'react';
import styled from "styled-components";
import {MdClose} from "react-icons/md";
import axios from 'axios';
import {Context} from '../../MemberList' 
import {Context as IngredientContext} from '../../Ingredient' 
import GetMemberByRefrigratorId from '../ForServer/GetMemberByRefrigratorId';
import GetIngredientByRefrigratorId from '../ForServer/GetIngredientByRefrigratorId';
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

  h3 {
    font-size: 1rem;
    margin: 20px 5px;
  }

  .make {
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 380px) {
    width: 260px;
  }
`;
const ModalTitle = styled.div`
  display: flex;
  margin-bottom: 10px;

  h2 {
    font-size: 1.3rem;
    margin-top: 0;
  }

  @media only screen and (max-width: 380px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;
const StyledInput = styled.input`
  height: 30px;
  width: 100%;
  background: none;
  outline: none;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid black;
  font-family: 'Noto Sans KR', sans-serif;

  &:hover {
    border-bottom: 1px solid #3C82D9;
  }
`;
const MakeButton = styled.button`
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

const CodeModal = ({
                     visible,
                     onCancel,
                     onConfirm,
                     setRefModal
                   }) => {
  const {state,dispatch}=useContext(Context);
  const IngredientData=useContext(IngredientContext);
  const [invitekey,SetInviteKey]=useState("");
  
  const JoinRef=()=>{
    axios.put("user/invite",
    {
      inviteKey:invitekey,
      user:JSON.parse(window.sessionStorage.getItem('User')).data
    }).then((res)=>{
      if(JSON.parse(window.sessionStorage.getItem('User'))){
        axios.post('user/auth/login',
        {
            id:JSON.parse(window.sessionStorage.getItem('User')).newId,
            name:JSON.parse(window.sessionStorage.getItem('User')).data.name,
            login_type:JSON.parse(window.sessionStorage.getItem('User')).data.login_type
        }
        ).then((res)=>{
            //유저 정보 다시 받아와서 세션값에 저장하기
          window.sessionStorage.setItem('User', JSON.stringify({
            newId: res.data.id,
            newRefId: res.data.refrigerator_id,
            data: res.data
        }));
        //모달 종료 시점
          onConfirm();
          GetMemberByRefrigratorId({refId:JSON.parse(window.sessionStorage.getItem('User')).newRefId,dispatch:dispatch})
          GetIngredientByRefrigratorId(
            {
              id: JSON.parse(window.sessionStorage.getItem('User')).newRefId,
              dispatch: IngredientData.dispatch
            }
          )
        })
      }
    }).catch((res)=>{
      alert("올바르지 않은 초대코드 입니다.")
      console.log("초대키를 확인해주세요.")
    });
  }
  if (!visible) return null;
  return (
    <Fullscreen>
      <ModalBlock>
        <ModalTitle>
          <h2>초대코드 입력하기</h2>
          <Spacer/>
          <CloseButton onClick={onCancel}>
            <MdClose/>
          </CloseButton>
        </ModalTitle>
        <h3>링크</h3>
        <StyledInput onChange={(e)=>{SetInviteKey(e.target.value)}}/>
        <div className="make">
          <MakeButton onClick={JoinRef}>확인</MakeButton>
        </div>
      </ModalBlock>
    </Fullscreen>

  );
};

export default CodeModal;