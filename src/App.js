import React, {useState,useEffect} from 'react';
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import FridgePage from "./pages/FridgePage";
import ShoppingBasketPage from "./pages/ShoppingBasketPage";
import RecipePage from "./pages/RecipePage";
import MyPage from "./pages/MyPage";
import Main from "./pages/Main";
import {Provider} from "./Ingredient";
import Test from "./Hello";
const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {

    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }
  useEffect(()=>{
    
    sessionStorage.setItem('Test',1);

  /*********************************/

    //서비스 희망하면 주석헤제!!
    //sessionStorage.removeItem('Test');

  /*********************************/

  });
  
  return(
      <> 
        <Provider>
        <Route component={LoginPage} path="/" exact/>
        <Route component={FridgePage} path="/fridge"/>
        <Route component={Main} path="/Main"/>
        <Route component={ShoppingBasketPage} path="/basket"/>
        <Route component={RecipePage} path="/recipe"/>
        <Route component={MyPage} path="/my" />
        </Provider> 
      </>

  );
};

export default App;