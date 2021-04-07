import React from 'react';
import KakaoLoginv from '../components/KakaoLoginv';
import GoogleButton from '../components/GoogleButton'
import logo from '../assets/Pnglogo.png'

const LoginPage = (props) => {
    function GoMain(e){
        props.history.push({pathname:'/Main',state:{User:e}}) 
    }
    return(
        <>
        <div style={{width:'600px',
    position: 'absolute',
    top: '30%',
    left: '36%',
    }}>
            <img src={logo}  />
            <div style={{marginTop:'120px', float:'right'}}> 
            <KakaoLoginv GoToMain={GoMain}></KakaoLoginv>
            <div style={{ height:'5px'}}></div>
            <GoogleButton GoToMain={GoMain} ></GoogleButton>
            </div>
            </div>
        </>
    )
};

export default LoginPage;