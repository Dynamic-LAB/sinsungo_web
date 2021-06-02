import React, {useState,useEffect} from 'react';
import {Route, withRouter} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import FridgePage from "./pages/FridgePage";
import ShoppingBasketPage from "./pages/ShoppingBasketPage";
import RecipePage from "./pages/RecipePage";
import MyPage from "./pages/MyPage";
import Main from "./pages/Main";
import {Provider} from "./Ingredient";
import {MemberProvider} from "./MemberList";
import Test from "./Hello";
import StartModal from "./components/common/StartModal"
const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {

    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }
  useEffect(()=>{
    
    //sessionStorage.setItem('Test',1);

  /*********************************/

    //서비스 희망하면 위의 구 삭제
    sessionStorage.removeItem('Test');

  /*********************************/
  });
  const [refModal,setRefModal]=useState(false);
  return(
      <> 
        
        <Provider>
        <MemberProvider>
        <StartModal visible={refModal} setRefModal={setRefModal} />
        <Route component={LoginPage} path="/" exact/>
        <Route render={() => <FridgePage setRefModal={setRefModal} />} path="/fridge"/>
        <Route component={Main} path="/Main"/>
        <Route render={() => <ShoppingBasketPage setRefModal={setRefModal} />} path="/basket"/>
        <Route render={() => <RecipePage setRefModal={setRefModal} />} path="/recipe"/>
        <Route render={() => <MyPage setRefModal={setRefModal} />} path="/my" />
        </MemberProvider>
        </Provider> 
      </>

  );
};

export default withRouter(App);