import React from "react";
import "./My.css";
import styled from "styled-components";
import './Inform.css';

const NoticeTitle = styled.div`
  text-align: center;
  margin-top: 30px;

  .title_bottom {
    margin-top: 10px;
    font-size: 13px;
    color: #a5aaad;
  }
`;
const NoticeContents = styled.div`
  margin-top: 50px;
`;
const Inform = () => {
  return (
    <div id="my">
      <div className="notice__container">
        <NoticeTitle>
          <h1>공지사항</h1>
          <div className="title_bottom">신선고의 새로운 소식과 유용한 정보들을 한곳에서 확인하세요.</div>
        </NoticeTitle>
        <NoticeContents>
          <table>
            <tbody>
            <tr>
              <th scope="row" width="30%">제목</th>
              <td>환영합니다 :)</td>
            </tr>
            <tr>
              <th scope="row" width="30%">작성자</th>
              <td>신선고마스터</td>
            </tr>
            <tr>
              <th scope="row" width="30%">작성일</th>
              <td >
                <time dateTime="2021-06-03">2021-06-03</time>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>

            </tbody>
          </table>
        </NoticeContents>
      </div>
    </div>
  );
}

export default Inform;