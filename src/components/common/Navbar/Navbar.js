import './Navbar.css';
import Button from "../Button";
import styled from 'styled-components';

const LogOutButton = styled(Button)`
  padding: 7px 12px 7px 12px;
  margin-left: 20px;
`;

const User = styled.div`
  align-items: center;
  justify-content: center;
`;

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
                <User>
                    <div className="user_name">
                        서현지
                    </div>
                    <div className="user_position">
                        마스터
                    </div>
                </User>
                <a href="#">
                    <i className="fa fa-user-circle-o"></i>
                </a>
                <LogOutButton>로그아웃</LogOutButton>
                {/*<a href="#">*/}
                {/*    <i className="fa fa-sign-out"></i>*/}
                {/*</a>*/}
            </div>
        </nav>
    );
}

export default Navbar;