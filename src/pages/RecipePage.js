import React, { useState } from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";
import Recipe from "../components/Recipe/Recipe"
import Right from "../components/common/Rightbar/Right";

const RecipePage = (props) => {
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

              <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
              <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
              <Recipe/>
              <Right/>

            </div>
        }
        </>
    );
};

export default RecipePage;