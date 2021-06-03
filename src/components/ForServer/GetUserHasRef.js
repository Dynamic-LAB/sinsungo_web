import React, {useState,useEffect} from 'react';
import axios from 'axios';
const GetUserHasRef = (props) => {
  if(JSON.parse(window.sessionStorage.getItem('User'))){
    axios.post('user/auth/login',
    {
      //유저 정보 요청
        id:JSON.parse(window.sessionStorage.getItem('User')).newId,
        name:JSON.parse(window.sessionStorage.getItem('User')).data.name,
        login_type:JSON.parse(window.sessionStorage.getItem('User')).data.login_type
    }
    ).then((res)=>{
      //유저 정보 받아옴
      console.log("받은정보",res.data)
      window.sessionStorage.setItem('User', JSON.stringify({
        newId: res.data.id,
        newRefId: res.data.refrigerator_id,
        data: res.data
    }));}).then((res)=>{
      if(JSON.parse(window.sessionStorage.getItem('User')).newRefId){
        //유정 정보에 냉장고가 있다면
        props.setRefModal(false);
        }
        else{
        props.setRefModal(true);
        }
    })
    .catch((res)=>{
      console.log("erorr Msg:",res)
    });
  }

  }  
export default GetUserHasRef;