import React, {useState,useEffect} from 'react';
import axios from 'axios';
const GetAlam = (props) => {
    axios.get("notification/"+props.id, {
      params: {
      }
    })
    .then((response)=> {
        // response 
        //console.log("알람:",response.data);
        props.SetAlam(response.data);

      }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실행
    });
    //props.setIngredients()

  }  
export default GetAlam;