import React, {useState,useEffect} from 'react';
import axios from 'axios';
const GetDietByRefrigratorId = (props) => {
    axios.get("diet/refrigerator/"+props.id, {
      params: {
      }
    })
    .then((response)=> {
        // response 
        props.dispatch({type:"ADD_",payload:response})
        return response;
      }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실행
    });
    //props.setIngredients()

  }  
export default GetDietByRefrigratorId;