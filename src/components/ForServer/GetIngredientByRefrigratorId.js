import React, {useState,useEffect} from 'react';
import axios from 'axios';
const GetIngredientByRefrigratorId = (props) => {
  console.log('정보',props.userInfo)
  useEffect(()=>{
    axios.get("/refrigerator/ingredient/:id", {
      params: {
        id:6
      }
    })
    .then((response)=> {
        // response  
    }).catch((error)=>{
        // 오류발생시 실행
    }).then(()=> {
        // 항상 실행
    });
    //props.setIngredients()
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

export default GetIngredientByRefrigratorId;