import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import FridgePage from "./pages/FridgePage";
import ShoppingBasketPage from "./pages/ShoppingBasketPage";
import RecipePage from "./pages/RecipePage";
import MyPage from "./pages/MyPage";


const App = () => {
  return(
      <>
        <Route component={LoginPage} path="/login" />
        <Route component={FridgePage} path="/fridge"/>
        <Route component={ShoppingBasketPage} path="/basket"/>
        <Route component={RecipePage} path="/recipe"/>
        <Route component={MyPage} path="/my"/>

      </>
  );
};

export default App;