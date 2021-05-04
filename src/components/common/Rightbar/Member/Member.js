import React from "react";
import {BsPeopleCircle} from "react-icons/bs";
import styled from "styled-components";
import "./Member.css";

//right-bar 사용
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
//my-page 사용
const MyMemberBlock = styled.div`
  padding: 50px 20px ;
  text-align: center;

  .member_name {
    padding: 5px;
    font-size: 0.75rem;
  }
`;
const MyProfileBlock = styled.div`
  display: flex;
  padding: 0 5px 0 5px;
  font-size: 3rem;
`;

const Member = ({type}) => {
  return (
    <>
      {type === 'right' && (
        <>
          <MemberBlock>
            <MemberState>
              <Circle><BsPeopleCircle/></Circle>
              <div className="icon_master"/>
            </MemberState>
            <div className="member_name">서현지</div>
          </MemberBlock>
          <MemberBlock>
            <MemberState>
              <Circle><BsPeopleCircle/></Circle>
              <div className="icon_remove"/>
            </MemberState>
            <div className="member_name">송윤경</div>
          </MemberBlock>
        </>
      )}

      {type === 'my' && (
        <>
          <MyMemberBlock>
            <MemberState>
              <MyProfileBlock><BsPeopleCircle/></MyProfileBlock>
              <div className="icon_my_master"/>
            </MemberState>
            <div className="member_name">서현지</div>
          </MyMemberBlock>
          <MyMemberBlock>
            <MemberState>
              <MyProfileBlock><BsPeopleCircle/></MyProfileBlock>
              <div className="icon_my_remove"/>
            </MemberState>
            <div className="member_name">송윤경</div>
          </MyMemberBlock>
        </>
      )}

    </>
  );
}

export default Member;