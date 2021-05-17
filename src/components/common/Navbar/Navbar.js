import './Navbar.css';
//import Button from "../Button";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import React from "react";

// const LogOutButton = styled(Button)`
//   padding: 10px 12px 10px 12px;
//   margin-left: 20px;
// `;

const User = styled.div`
  align-items: center;
  justify-content: center;
`;
const Profile = styled.div`
  margin-left: 6px;
  text-decoration: none;
  i {
    color: #393939;
    font-size: 30px;
    padding: 6px;
  }
`;

const Navbar = ({sidebarOpen, openSidebar, user}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"/>
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
                <Profile>
                  <Link to='/my'>
                    <i className="fa fa-user-circle-o"/>
                  </Link>
                </Profile>
                {/*<LogOutButton to="/" logout>로그아웃</LogOutButton>*/}
            </div>
        </nav>
    );
}

export default Navbar;