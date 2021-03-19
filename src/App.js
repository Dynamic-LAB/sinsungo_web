import {useState} from 'react';
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import FridgePage from "./pages/FridgePage";
import ShoppingBasketPage from "./pages/ShoppingBasketPage";
import RecipePage from "./pages/RecipePage";
import MyPage from "./pages/MyPage";
import Sidebar from "./components/common/Sidebar/Sidebar";


const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    };
    const closeSidebar = () => {
        setSidebarOpen(false);
    };

  return(
      <>
        <Route component={LoginPage} path="/login" />
        <Route component={FridgePage} path="/fridge"/>
        <Route component={ShoppingBasketPage} path="/basket"/>
        <Route component={RecipePage} path="/recipe"/>
        <Route component={MyPage} path="/my"/>
        <div className="container">
            <h1> Dashboard </h1>
        </div>
      </>
  );
};

export default App;