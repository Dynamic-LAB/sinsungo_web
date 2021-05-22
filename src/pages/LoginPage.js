import React, {useState} from 'react';
import KakaoLoginv from '../components/KakaoLoginv';
import GoogleButton from '../components/GoogleButton'
import NaverLoginBtn from '../components/NaverLoginBtn'
import styled, {css} from "styled-components";
import logo from '../assets/sinsungo_logo.png'
import logo_video from '../assets/sinsungo_logo.mp4';
import {MdPlayArrow} from "react-icons/md";
import UserLoginOrSignup from "../components/ForServer/UserLoginOrSignup"

// VIDEO(서서히 없어지기)
const VideoBlock = styled.div`
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  .login_video {
    width: 500px;
    height: 500px;
    animation: fadeout 1s 4s forwards; // 4초의 지연시간 후 1초 동안 사라지기
    @keyframes fadeout {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
  .skip_button{
    button{
      display: flex;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      position: absolute;
      top: 100%;
      left: 50%;
    }
    text-align: center;
    align-items: center; //세로중앙정렬
    justify-content: center;
    animation: fadeout 1s 4s forwards; // 4초의 지연시간 후 1초 동안 사라지기
    @keyframes fadeout {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;
// LOGO, LOGIN_BUTTON(없어졌다가 생기기)
const LoginBlock = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  //div 자식요소 가운데 정렬
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadein 3s 5s forwards; //5초의 지연시간 후 1초 동안 나타나기
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @media only screen and (max-width: 1350px) {
    display: block;
    text-align: center;
    .login_logo{
      width: 250px;
      height: 220px;
    }
  }
  ${props =>
          props.unshow &&
          css`
            animation: fadein 3s forwards;
            @keyframes fadein {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}
  
`;
const LoginButton = styled.div`
  margin-left: 50px;
  float: right;
  text-align: center;
  
  @media only screen and (max-width: 1350px) {
    float: none;
    margin: 50px auto;
    text-align: center;
  }
`;

const LoginPage = (props) => {

  const [loginInfo, setLoginInfo] = useState(0);

  function GoMain(e, type) {
    setLoginInfo([type, e]);
  }

  function success(data) {
    window.sessionStorage.setItem('User', JSON.stringify({newId: data.id, newRefId: data.refrigerator_id, data: data}));
    props.history.push({pathname: '/Fridge', state: {User: {newId: data.id, newRefId: data.refrigerator_id, data: data}}})
  }

  const [show, setShow] = useState(true);
  const onShow = () => {
    setShow(false);
  }
  return (
    <>
      {show ? <VideoBlock>
        <video autoPlay preload muted playsInline className="login_video">
          <source src={logo_video} type="video/mp4"/>
        </video>
        <div className="skip_button">
          <button onClick={onShow}>
            skip
            <MdPlayArrow/>
          </button>
        </div>
      </VideoBlock> : <LoginBlock unshow>
        <img className="login_logo" src={logo} alt="신선고 로고" />
        <LoginButton>
          <KakaoLoginv GoMain={GoMain}/>
          <div style={{height: '5px'}}/>
          <GoogleButton GoMain={GoMain}/>
          <div style={{height: '5px'}}/>
          <NaverLoginBtn GoMain={GoMain}/>
        </LoginButton>
      </LoginBlock>}
      <UserLoginOrSignup loginInfo={loginInfo} setLoginInfo={setLoginInfo} success={success}/>
      <LoginBlock>
        <img className="login_logo" src={logo} alt="신선고 로고" />
        <LoginButton>
          <KakaoLoginv GoMain={GoMain}/>
          <div style={{height: '5px'}}/>
          <GoogleButton GoMain={GoMain}/>
          <div style={{height: '5px'}}/>
          <NaverLoginBtn GoMain={GoMain}/>
        </LoginButton>
      </LoginBlock>

    </>
  )
};

export default LoginPage;