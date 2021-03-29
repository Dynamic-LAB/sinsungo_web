import './Navbar.css';

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <div className="navbar__comment">
                    신선하게 우리집 냉장고를 관리하세요!
                </div>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-user-circle-o"></i>
                </a>
                <a href="#">
                    <i className="fa fa-sign-out"></i>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;