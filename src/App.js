import React, {useState,useEffect} from 'react';
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import FridgePage from "./pages/FridgePage";
import ShoppingBasketPage from "./pages/ShoppingBasketPage";
import RecipePage from "./pages/RecipePage";
import MyPage from "./pages/MyPage";
import Main from "./pages/Main";

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {

    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }
  useEffect(()=>{
    seeUser()
      .then(res=> this.setState({customers:res}))
      .catch(err => console.log(err));
      setSidebarOpen(true);
  }
  });
  const addUser = async ()=>{
    const response = await fetch('/api/oauth2');
    const body = await response.json();
    return body;
  }
  const seeUser = async ()=>{
    const response = await fetch('/api/oauth');
    const body = await response.json();
    return body;
  }

  return(
      <>
        <Route component={Main} path="/" exact/>
        <Route component={LoginPage} path="/login" />
        <Route component={FridgePage} path="/fridge"/>
        <Route component={ShoppingBasketPage} path="/basket"/>
        <Route component={RecipePage} path="/recipe"/>
        <Route component={MyPage} path="/my" />
      </>

  );
};

export default App;