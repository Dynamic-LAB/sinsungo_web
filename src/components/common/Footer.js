import React from "react";
import styled from "styled-components";
import googlePlay from '../../assets/google-play-badge.png';

const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 150px 0 10px 0;
  padding-top: 30px;
  border-top: 1px solid #a3a3a3;

  .logo_footer {
    display: flex;
    justify-content: flex-start;
    font-family: "Yoon", cursive;
    margin-bottom: 10px;
    letter-spacing: 10px; /*글자 사이 간격*/
    font-size: 20px;
  }
  .text_footer {
    display: flex;
    justify-content: flex-end;
  }
  .footer_right {
    margin-top: 1.5rem;
    padding-right: 10px;
  }
  .footer_left {
    padding-left: 10px;
  }
  .play_store {
    display: flex;
    justify-content: flex-end;
    width: 130px;
    height: 50px;
    cursor: pointer;
  }
`;

const FooterLeftTop = styled.div`
  display: flex;
  .left_text_line {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    margin-right: 15px;
    text-decoration: underline;
  }
  .left_text {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    margin-right: 15px;
  }
`;

const Footer = () => {
  return(
    <FooterBlock>
      <div className="footer_left">
        <FooterLeftTop>
          <div className="left_text_line">법적고지</div>
          <div className="left_text">문의 : </div>
        </FooterLeftTop>
        <div className="logo_footer">신선고</div>
        <div className="text_footer">©2021 Created by Dynamic-LAB</div>
      </div>
    </FooterBlock>
  );
};

export default Footer;