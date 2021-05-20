import React, {useState} from 'react';
import KakaoLoginv from '../components/KakaoLoginv';
import GoogleButton from '../components/GoogleButton'
import styled from "styled-components";
import logo from '../assets/sinsungo_logo.png'
import logo_video from '../assets/sinsungo_logo.mp4';
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
    animation: fadeout 1s 4s forwards;
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
  animation: fadein 1s 5s forwards;
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

  return (
    <>
      <VideoBlock>
        <video autoPlay preload muted playsInline className="login_video">
          <source src={logo_video} type="video/mp4"/>
        </video>
      </VideoBlock>
      <UserLoginOrSignup loginInfo={loginInfo} setLoginInfo={setLoginInfo} success={success}/>
      <LoginBlock>
        <img className="login_logo" src={logo} alt="신선고 로고"/>
        <LoginButton>
          <KakaoLoginv GoMain={GoMain}/>
          <div style={{height: '5px'}}/>
          <GoogleButton GoMain={GoMain}/>
        </LoginButton>
      </LoginBlock>
    </>
  )
};

export default LoginPage;