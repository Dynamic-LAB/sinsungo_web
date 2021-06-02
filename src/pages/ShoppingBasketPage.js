import React, {useState} from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Right from "../components/common/Rightbar/Right";
import Sidebar from "../components/common/Sidebar/Sidebar";
import Basket from "../components/Basket/Basket";
import {ShoppingProvider} from "../components/Basket/ListContext";
import {DietProvider} from "../components/Basket/Diet/DietContext";
import { withRouter } from 'react-router';


const ShoppingBasketPage = (props) => {
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
          <DietProvider>
            <ShoppingProvider>
              <Basket/>
            </ShoppingProvider>
          </DietProvider>

          <Right/>
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        </div>
      }
    </>
  );
};

export default withRouter(ShoppingBasketPage);