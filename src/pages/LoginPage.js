import React, {useState} from 'react';
import KakaoLoginv from '../components/KakaoLoginv';
import GoogleButton from '../components/GoogleButton'
import styled from "styled-components";
import logo from '../assets/sinsungo_logo.png'
import UserLoginOrSignup from "../components/ForServer/UserLoginOrSignup"

const LoginBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  //div 자식요소 가운데 정렬
  display: flex;
  justify-content: center;
  align-items: center;
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
      <LoginBlock>
        <UserLoginOrSignup loginInfo={loginInfo} setLoginInfo={setLoginInfo} success={success}/>
          <img className="login_logo" src={logo}/>

        <LoginButton>
          <KakaoLoginv GoMain={GoMain}></KakaoLoginv>
          <div style={{height: '5px'}}></div>
          <GoogleButton GoMain={GoMain}></GoogleButton>
        </LoginButton>
      </LoginBlock>
    </>
  )
};

export default LoginPage;