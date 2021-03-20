import "./Sidebar.css";

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
                    <a href="#">냉장고</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-shopping-bag"></i>
                    <a href="#">장바구니</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cutlery"></i>
                    <a href="#">레시피</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user"></i>
                    <a href="#">마이페이지</a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;