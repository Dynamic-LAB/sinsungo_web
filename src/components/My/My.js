import React from "react";
import "./My.css";
import styled from 'styled-components';
import WhiteBox from "../common/WhiteBox";
import {MdAdd} from "react-icons/md";

const WhiteBoxMy = styled(WhiteBox)`
  height: 250px;
`;

const MyTitle = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  font-size: 10px;
  border-bottom: 1px solid #bbbbbb;
  @media only screen and (max-width: 978px) {
    padding: 10px 20px;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`;

const My = () => {
    return(
        <my>
            <div className="my__container">
                <div className="fridge__cards">
                    <div className="my__notice">
                        <WhiteBoxMy>
                            <MyTitle>
                                <h2>알림</h2>

                            </MyTitle>
                        </WhiteBoxMy>
                    </div>
                    <div className="my__member">
                        <WhiteBoxMy>
                            <MyTitle>
                                <h2>신선고 멤버 추가하기</h2>
                               <Spacer/>
                                <div className="plus"><MdAdd/></div>
                            </MyTitle>
                        </WhiteBoxMy>
                    </div>
                </div>
            </div>
        </my>
    );
}

export default My;