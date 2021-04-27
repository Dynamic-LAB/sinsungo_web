import React, {useState,useEffect} from 'react';
import axios from 'axios';
const UserLoginOrSignup = (props) => {
  var postId,postName;
  var postLoginType;
  useEffect(()=>{
    if(props.loginInfo==0){
      console.log('로그인 정보 없음',props.loginInfo)
      return
    }else {
      if(props.loginInfo[0]=='google'){
        postLoginType='google'
        const {googleId,profileObj:{name}}=props.loginInfo[1];
          postId=googleId;
          postName=name;
      }else if(props.loginInfo[0]=='kakao'){
        postLoginType='kakao'
        const {id,properties: {nickname}}=props.loginInfo[1];
        postId=id;
        postName=nickname;
      }else if(props.loginInfo[0]=='naver'){
        postLoginType='naver'
      }
    }
    axios.post('user/auth/login',
    {
        id:postId,
        name:postName,
        login_type:postLoginType
    }
    ).then((res)=>{
      props.success();
    })
    .catch((res)=>{
      console.log("erorr Msg:",res)
    });
  });
  const getTest = ()=>{
      axios.get("/TestGet", {
        params: {
          id: 123
        }
      })
      .then((response)=> {
          // response  
      }).catch((error)=>{
          // 오류발생시 실행
      }).then(()=> {
          // 항상 실행
      });
  }
  const postTest = ()=>{
    axios.post('/TestPost', 
    { 
     contact: 'Sewon', 
     email: 'sewon@gmail.com' 
     }, 
    { 
     headers:{ 
      'Content-type': 'application/json', 
      'Accept': 'application/json' 
        } 
      } 
  ) 
    .then((response) => { 
      //전송성공
      console.log(response.data); 
    }) 
      //전송실패
    .catch((response) => { 
      console.log('Error!') 
    });
}
  return(
      <>
       
      </>

  );
};

export default UserLoginOrSignup;