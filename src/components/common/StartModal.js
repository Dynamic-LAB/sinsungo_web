import React, {useState,useContext} from 'react';
import styled from "styled-components";
import CodeModal from "./CodeModal";
import axios from 'axios';
import welcome from "../../assets/img_welcome.png";
import {Context} from "../../MemberList"
import GetMemberByRefrigratorId from '../ForServer/GetMemberByRefrigratorId';
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
  z-index: 50;

  .button_block {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
  @media only screen and (max-width: 370px) {
    width: 250px;
  }
`;

const StyledButton = styled.button`
  text-align: center;
  width: 200px;
  height: 40px;
  outline: none;
  background: none;
  border: 2px solid #3C82D9;
  color: #3C82D9;
  border-radius: 20px;
  font-size: 13px;
  padding: 0.25rem 1.25rem;
  margin: 10px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  transition: .2s;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.125);
    background: #3C82D9;
    color: #ffffff;
  }

  @media only screen and (max-width: 765px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 370px) {
    font-size: 8px;
  }
`;
const ImageBlock = styled.div`
  display: flex;
  align-items: center; //세로중앙정렬
  justify-content: center;
  
  @media only screen and (max-width: 370px) {
    .welcome_image {
      width: 250px;
    }
  }
`;
const TitleBlock = styled.div`
  text-align: center;
  h2 {
    font-size: 45px;
    margin-bottom: 10px;
  }
  .welcome_text {
    font-size: 14px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 370px) {
    h2 {
      font-size: 35px;
    }
    .welcome_text {
      font-size: 12px;
    }
  }
`;

const StartModal = ({visible,setRefModal}) => {
  const [modal, setModal] = useState(false);
  const {state,dispatch}=useContext(Context);
  const onCodeInput = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    setRefModal(false);
    //이 팝업도 같이 닫히도록 코드 넣어야함
  }
  const MakeRef=()=>{
    //API 요청해서 해당 아이디 냉장고 생성
    //API: /refrigerator/
    axios.post("/refrigerator/",
    {
      refrigerator:{master:JSON.parse(window.sessionStorage.getItem('User')).newId},
      login_type:JSON.parse(window.sessionStorage.getItem('User')).data.login_type,
    }).then((res)=>{
      if(JSON.parse(window.sessionStorage.getItem('User'))){
        axios.post(' user/auth/login',
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
          setRefModal(false);
          GetMemberByRefrigratorId({refId:JSON.parse(window.sessionStorage.getItem('User')).newRefId,dispatch:dispatch})
        })
        .catch((res)=>{
          console.log("erorr Msg:",res)
        });
      }
    })
  }
  if (!visible) return null;
  return (
    <Fullscreen>
      <ModalBlock>
        <ImageBlock>
          <img className="welcome_image" src={welcome} alt="환영"/>
        </ImageBlock>
        <TitleBlock>
          <h2>Welcome!</h2>
          <div className="welcome_text">우리집 냉장고와 식습관 관리,</div>
          <div className="welcome_text">이제 신선고로 편리하게 해보세요!</div>
        </TitleBlock>
        <div className="button_block">
          <StyledButton onClick={onCodeInput}>초대코드 입력하기</StyledButton>
          <StyledButton onClick={MakeRef}>시작하기</StyledButton>
        </div>
        <CodeModal
          visible={modal}
          onConfirm={onConfirm}
          onCancel={onCancel}
          setRefModal={setRefModal}
        />
      </ModalBlock>
    </Fullscreen>
  );
}

export default StartModal;