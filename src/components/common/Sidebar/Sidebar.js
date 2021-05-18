import "./Sidebar.css";
import {Link} from 'react-router-dom';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <h1>신선고</h1>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        />
      </div>
      <div className="sidebar__menu toggle">
        <Link to="/fridge">
          <div className="sidebar__link">
            <div className="icon-fridge"/>
            <Link to="/fridge">냉장고</Link>
          </div>
        </Link>
        <Link to="/basket">
          <div className="sidebar__link">
            <div className="icon-basket"/>
            <Link to="/basket">장바구니</Link>
          </div>
        </Link>
        <Link to="/recipe">
          <div className="sidebar__link">
            <div className="icon-recipe"/>
            <Link to="/recipe">레시피</Link>
          </div>
        </Link>
        <Link to="/my">
          <div className="sidebar__link">
            <div className="icon-my"/>
            <Link to="/my">마이페이지</Link>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;