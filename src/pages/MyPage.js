import React, { useState } from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";

const MyPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    return (
        <>
            <div className="container">
                <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>


                <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            </div>
        </>
    );
};

export default MyPage;