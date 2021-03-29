import "./Sidebar.css";
import { Link } from 'react-router-dom';
const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <h1>신선고</h1>
                <i
                    className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link">
                    <i className="fa fa-inbox"></i>
                    <Link to="/fridge" >냉장고</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-shopping-bag"></i>
                    <Link to="/basket">장바구니</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cutlery"></i>
                    <Link to="/recipe" >레시피</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user"></i>
                    <Link to="/my" >마이페이지</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;