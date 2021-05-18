import React, { Component, useEffect, useState } from "react";
import btnImg from '../assets/kakao.png';
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  .kakaoButton {
    width: 300px;
  }
`;

function KaKaoLoginv(props){
  const key="8dc7de968135de9e418fd032222a598f";
  function newLogin(){
    window.Kakao.Auth.loginForm({
      success: function(response) {
        //console.log("Kakao 토큰 정보(토큰을 통해 유저 정보 가져옴)",response);
        const {access_token}=response;
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            //console.log("Kakao 사용자 정보", res);
            //const { id, properties : { nickname } } = res; 
            props.GoMain(res,'kakao');
            window.sessionStorage.setItem('id',1 );
          },
          fail: (err) => {
            console.log(err);
          },
        });
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
   })
  }
  
  function orderLogin(){
  window.Kakao.Auth.createLoginButton({
    container: "#kakao-login-btn",
    success: (auth) => {
      /*console.log("Kakao 로그인 완료", auth);
      // Kakao 로그인 성공시, 사용자정보 API 호출
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log("Kakao 사용자 정보", res);
        },
        fail: (err) => {
          console.log(err);
        },
      });
      */
    },
    fail: (err) => {
      /*
      console.log(err);
      */
    },
  });
  }
  useEffect(() => {
    const kakaoScript = document.createElement("script");
    kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.head.appendChild(kakaoScript);

    // Kakao sdk 스크립트 로드 완료시
    kakaoScript.onload = () => {
      window.Kakao.init(key);
    };
  });
  return( 
    <>
    <StyledButton onClick={newLogin}>
      <img className="kakaoButton" src={btnImg} alt="카카오 로그인"/>
    </StyledButton>
    </>
    );
}
export default KaKaoLoginv