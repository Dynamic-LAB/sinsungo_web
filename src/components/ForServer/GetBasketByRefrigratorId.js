import React, {useState,useEffect} from 'react';
import axios from 'axios';
const GetBasketByRefrigratorId = (props) => {
    axios.get(" shoppinglist/"+props.id, {
      params: {
      }
    })
    .then((response)=> {
        // response 
        //console.log("구매목록",response);
        props.dispatch({type:"ADD_",payload:response})
        return response;
      }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실행
    });
    //props.setIngredients()

  }  
export default GetBasketByRefrigratorId;