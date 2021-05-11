import React , { useState } from 'react';
import KakaoLoginv from '../components/KakaoLoginv';
import GoogleButton from '../components/GoogleButton'
import logo from '../assets/Pnglogo.png'
import UserLoginOrSignup from "../components/ForServer/UserLoginOrSignup"


const LoginPage = (props) => {

    const [loginInfo,setLoginInfo]=useState(0);
    function GoMain(e,type){
    setLoginInfo([type,e]);
    }
    function success(data){
         window.sessionStorage.setItem('User',JSON.stringify({newId:data.id,newRefId:data.refrigerator_id,data:data}));
         props.history.push({pathname:'/Fridge',state:{User:{newId:data.id,newRefId:data.refrigerator_id,data:data}}})
    }
    return(
        <>
        <div style={{width:'600px',
    position: 'absolute',
    top: '30%',
    left: '36%',
    }}>
            <UserLoginOrSignup loginInfo={loginInfo} setLoginInfo={setLoginInfo} success={success}/>
            <img src={logo}  />
            <div style={{marginTop:'120px', float:'right'}}> 
            <KakaoLoginv GoMain={GoMain}></KakaoLoginv>
            <div style={{ height:'5px'}}></div>
            <GoogleButton GoMain={GoMain} ></GoogleButton>
            </div>
            </div>
        </>
    )
};

export default LoginPage;