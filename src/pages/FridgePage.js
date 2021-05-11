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
    return (
        <>
        {JSON.parse(window.sessionStorage.getItem('User'))==null  && sessionStorage.getItem('Test')==null ?
        props.history.push({pathname:'/'}):
    
            <div className="container">
                <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
                <Fridge userInfo={location.state==undefined ?null :location.state.User}/>
                <Right/>
                <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            </div>
        } 
        </>
    );
};

export default FridgePage;