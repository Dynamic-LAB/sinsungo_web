import React, { useState } from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";
import My from "../components/My/My";

const MyPage = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    return (
        <>
        {JSON.parse(window.sessionStorage.getItem('User'))==null  && sessionStorage.getItem('Test')==null ?
        props.history.push({pathname:'/'}):

            <div className="my_container">
                <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
                    <My/>
                <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            </div>
        }
        </>
    );
};

export default MyPage;