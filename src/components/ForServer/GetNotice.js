import React, {useState,useEffect} from 'react';
import axios from 'axios';
const GetNotice = (props) => {
    axios.get("notice/", {
      params: {
      }
    })
    .then((response)=> {
        // response 
        //console.log("구매목록",response.data);
        props.SetServerNotice(response.data)
        
      }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실행
    });
    //props.setIngredients()

  }  
export default GetNotice;