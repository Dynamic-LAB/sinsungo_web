import React from "react";
import { BsPeopleCircle } from "react-icons/bs";
import styled from "styled-components";
import "./Member.css";

const MemberBlock = styled.div`
  padding: 10px;
  text-align: center;
  .member_name {
    padding: 5px;
    font-size: 0.75rem;
  }
`;

const MemberState = styled.div`
  display: inline-block;
  height: 0;
`;

const Circle = styled.div`
  display: flex;
  padding: 0 5px 0 5px;
  font-size: 2.5rem;
`;

const Member = () => {
    return (
        <>
            <MemberBlock>
                <MemberState>
                    <Circle><BsPeopleCircle/></Circle>
                    <div className="icon_member"/>
                </MemberState>
                <div className="member_name">서현지</div>
            </MemberBlock>

        </>
    );
}

export default Member;