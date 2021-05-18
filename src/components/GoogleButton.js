import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import btnImg from '../assets/google.png'

const LoginBtn = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  .googleButton {
    width: 300px;
  }
`;

const clientId = "717096392722-0ukrc6ofn0fuue61ol1ounln68ktvfc4.apps.googleusercontent.com";

function GoogleButton(props) {
  let [isLogin, LoginChange] = useState("");

  const onSuccess = async (response) => {
    //console.log("구글 로그인 정보",response);
    //const { googleId,tokenId, profileObj : { email, name } } = response;
    //LoginChange([googleId,email,name]);
    props.GoMain(response, 'google');
  }
  const onFailure = (error) => {
    console.log(error);
    window.sessionStorage.setItem('id', -1);
  }

  return (
    <div>
      {isLogin[1]}
      <GoogleLogin
        render={renderProps => (
          <LoginBtn onClick={renderProps.onClick}>
            <img className="googleButton" src={btnImg} alt="구글 로그인"/>
          </LoginBtn>
        )}
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}/>
    </div>
  )
}

export default GoogleButton