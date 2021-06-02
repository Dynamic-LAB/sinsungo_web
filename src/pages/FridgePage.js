import React, {useState,useContext, useEffect} from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";
import Fridge from "../components/Fridge/Fridge";
import Right from "../components/common/Rightbar/Right";
import {useLocation} from "react-router";
import axios from 'axios';
import startModal from "../components/common/StartModal";
const FridgePage = (props) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }
  /*window 는 브라우즈라는 객체를 의미
      resize 라는 이벤트 함수를 사용해서 브라우저의 사이즈가 조절될 때 수행하는 함수 */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 978) {
      closeSidebar();
    }
  })
  useEffect(()=>{

    if(JSON.parse(window.sessionStorage.getItem('User'))){
      axios.post('user/auth/login',
      {
          id:JSON.parse(window.sessionStorage.getItem('User')).newId,
          name:JSON.parse(window.sessionStorage.getItem('User')).data.name,
          login_type:JSON.parse(window.sessionStorage.getItem('User')).data.login_type
      }
      ).then((res)=>{
        window.sessionStorage.setItem('User', JSON.stringify({
          newId: res.data.id,
          newRefId: res.data.refrigerator_id,
          data: res.data
      }));
      if(JSON.parse(window.sessionStorage.getItem('User')).newRefId===null)
      props.setRefModal(true);
      else
      props.setRefModal(false);
      })
      .catch((res)=>{
        console.log("erorr Msg:",res)
      });
    }
   
  },[])
  
  return (
    <>
      {JSON.parse(window.sessionStorage.getItem('User')) == null && sessionStorage.getItem('Test') == null ?
        props.history.push({pathname: '/'}) :
        
        <div className="container">
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
          <Fridge userInfo={location.state == undefined ? null : location.state.User}/>
          <Right/>
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        </div>
      }
    </>
  );
};

export default FridgePage;