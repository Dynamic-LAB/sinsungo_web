import React from 'react';
import {useSelector} from "react-redux";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const {user} = useSelector(({user})=>({user: user.user}));

  return(
    <Navbar user={user}/>
  );
};

export default NavbarContainer;
//로그인 후에 새로고침을 해도 로그인이 유지되는 기능을 만들기 위해서 파일 생성함