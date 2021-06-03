import React from "react";
import "./My.css";
import styled from "styled-components";
import './Inform.css';
import {Link} from "react-router-dom";
import Button from "../common/Button";

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
const StyledButton = styled(Button)`
  height: 2rem;
  border-radius: 20px;
  font-size: 0.75rem;
  padding: 0.25rem 2.5rem;
  margin-top: 30px;
`;

const Inform = (props) => {
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
              <td>{props.serverNotice.title}</td>
            </tr>
            <tr>
              <th scope="row" width="30%">작성자</th>
              <td>신선고마스터</td>
            </tr>
            <tr>
              <th scope="row" width="30%">작성일</th>
              <td >
                <div>{props.serverNotice.date}</div>
                {/*<time dateTime="2021-06-01">2021-06-05</time>*/}
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="contents_text">
              {props.serverNotice.content}
              </td>
            </tr>

            </tbody>
          </table>
        </NoticeContents>
        <div className="modal_buttons">
          <Link to="/my"><StyledButton blueBtn>목록</StyledButton></Link>
        </div>
      </div>
    </div>
  );
}

export default Inform;