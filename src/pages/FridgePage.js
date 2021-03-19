import React from 'react';
import Header from "../components/common/Header";
import styled from "styled-components";
// import Navi from "../components/common/Navi";

const Spacer = styled.div`
  width: 15rem;
`;

const FridgePage = () => {
    return (
        <>
            <Header />
            {/*<Navi/>*/}
            <Spacer/>
            <div>냉장고</div>
        </>
    );
};

export default FridgePage;