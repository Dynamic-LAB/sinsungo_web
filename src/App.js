import {useState} from 'react';
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import FridgePage from "./pages/FridgePage";
import ShoppingBasketPage from "./pages/ShoppingBasketPage";
import RecipePage from "./pages/RecipePage";
import MyPage from "./pages/MyPage";
import Navbar from "./components/common/Navbar/Navbar";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Fridge from "./components/Fridge/Fridge";
import Main from "./pages/Main";
import Right from "./components/common/Rightbar/Right";

const App = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
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