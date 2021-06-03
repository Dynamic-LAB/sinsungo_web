import React, {useState} from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";
import Inform from "../components/My/Inform";

const NoticePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  /*window 는 브라우즈라는 객체를 의미
  resize 라는 이벤트 함수를 사용해서 브라우저의 사이즈가 조절될 때 수행하는 함수 */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 978) {
      closeSidebar();
    }
  });
  return (
    <>
      <div className="my_container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <Inform/>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      </div>
    </>
  )
};

export default NoticePage;