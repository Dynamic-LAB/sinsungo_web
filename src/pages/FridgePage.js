import React, {useState} from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";
import Fridge from "../components/Fridge/Fridge";
import Right from "../components/common/Rightbar/Right";
import {useLocation} from "react-router";

const FridgePage = () => {
    const location = useLocation();
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
                <Fridge userInfo={location.state==undefined ?null :location.state.User}/>
                <Right/>
                <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            </div>
        </>
    );
};

export default FridgePage;