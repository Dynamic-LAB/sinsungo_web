import React, { useState } from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Right from "../components/common/Rightbar/Right";
import Sidebar from "../components/common/Sidebar/Sidebar";
import Basket from "../components/Basket/Basket";


const ShoppingBasketPage = (props) => {
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
                <Basket/>
                <Right/>
                <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            </div>
        }
        </>
    );
};

export default ShoppingBasketPage;