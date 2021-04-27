import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
    return (
    <>
    <div>메인페이지</div>
    <Link to="/recipe" >레시피</Link>
    </>
    )
};

export default Main;