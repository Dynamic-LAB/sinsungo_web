import React, {useState,useEffect} from 'react';
import axios from 'axios';
const GetMemberByRefrigratorId = (props) => {
    axios.get("/refrigerator/"+props.refId, {
      params: {
      }
    })
    .then((response)=> {
        // response 
        props.SetMembers(response.data);
      }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실 
    });
    //props.setIngredients()

  }  
export default GetMemberByRefrigratorId;