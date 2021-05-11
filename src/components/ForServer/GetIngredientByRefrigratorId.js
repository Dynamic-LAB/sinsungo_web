import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Test from '../Fridge/Test'
const GetIngredientByRefrigratorId = (props) => {
  const {newId,newRefId}=props.userInfo;
  useEffect(()=>{

    if(newRefId==null){
      alert("냉장고 미할당");
      return;
    }else{
    axios.get("/refrigerator/ingredient/"+newRefId, {
      params: {
        
      }
    })
    .then((response)=> {  
        // response 
        props.setIngredients(response)
      }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실행
    });
    //props.setIngredients()
  }
  },[]);
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

export default GetIngredientByRefrigratorId;