import React, {useState} from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";
import Fridge from "../components/Fridge/Fridge";
import Right from "../components/common/Rightbar/Right";
import {useLocation} from "react-router";
import axios from 'axios';

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