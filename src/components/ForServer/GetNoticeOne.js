import React, {useState,useEffect} from 'react';
import axios from 'axios';
const GetNoticeOne = (props) => {
    axios.get("/notice/"+props.id, {
      params: {
      }
    })
    .then((response)=> {
        // response 
         props.SetNotice(response.data);
         return true;
      }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실행
    });
    //props.setIngredients()

  }  
export default GetNoticeOne;