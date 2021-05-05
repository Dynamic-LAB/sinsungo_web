import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
    <>
    <div>개발을 위한 빠른 이동메뉴</div>
    <hr></hr>
    
    <Link to="/fridge" >냉장고</Link><hr></hr>
    <Link to="/" >로그인</Link><hr></hr>
    <Link to="/recipe" >레시피</Link><hr></hr>
    </>
    )
};

export default Main;