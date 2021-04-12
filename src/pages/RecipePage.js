import React, { useState } from 'react';
import Navbar from "../components/common/Navbar/Navbar";
import Sidebar from "../components/common/Sidebar/Sidebar";
import WhiteBox from "../components/common/WhiteBox";
import styled from 'styled-components';
import Recipe from "../components/Recipe/Recipe"
import Right from "../components/common/Rightbar/Right";
const RecipePage = () => {
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
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            <Right/>
            <Recipe></Recipe>
            </div>
        </>
    );
};

export default RecipePage;