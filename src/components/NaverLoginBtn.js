import React,{useEffect} from 'react'
import btnImg from '../assets/naver.png';
import styled from "styled-components";


const StyledButton = styled.button`
  margin:5px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  .naverButton {
    width: 300px;
  }
`;
function callTest(){
  alert("hihihihi");
}
const NaverLoginBtn=(props)=>{ 
/*
<script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
    charset="utf-8"></script>
*/
const handleNaverLogin=()=>{
  const naverLoginCall=document.getElementById("naverIdLogin").firstChild;
  naverLoginCall.click();
}
  useEffect(() => {
    const NaverScript = document.createElement("script");
    NaverScript.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js";
    document.head.appendChild(NaverScript);
    // Kakao sdk 스크립트 로드 완료시
    NaverScript.onload = () => {
      const  naverLogin=new window.naver.LoginWithNaverId({  
        clientId: '8aKMDUQv6i698qxBf916',
        callbackUrl: 'http://localhost/', 
        isPopup: true, // popup 형식으로 띄울것인지 설정
        callbackHandle:false,
        loginButton: { color: 'green', type:3, height: '65'  }, //버튼의 스타일, 타입, 크기를 지정
     });
     naverLogin.init();
     if(window.location.href.indexOf('=')>0){
     const location = window.location.href.split('=')[1];
     const token = location.split('&')[0];
     naverLogin.getLoginStatus(function (status) {
      if (status) {
          /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
          var email = naverLogin.user.getEmail();
          if (email == undefined || email == null) {
              alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
              /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
              naverLogin.reprompt();
              return;
          }
          if(window.opener){
            window.opener.document.getElementById('LoginData').value=[naverLogin.user,'naver'];
            window.opener.document.getElementById('LoginData').click();
            window.self.close();
          }
          //props.GoMain(naverLogin.user,'naver');
          //window.location.replace("http://localhost/");
      } else {
          console.log("callback 처리에 실패하였습니다.");
      }
  });
     }
    };
  },[]);
  return(
  <>
    <div id='naverIdLogin' style={{position:'absolute',top:"-10000px"}}  />
    <StyledButton onClick={handleNaverLogin}>
      <img className="naverButton" src={btnImg} alt="네이버 로그인"/>
    </StyledButton>
    <div id='LoginData' onClick={(e)=>props.GoMain(e.target.value[0],e.target.value[1])}></div>
  </>
  )
}
export default NaverLoginBtn;