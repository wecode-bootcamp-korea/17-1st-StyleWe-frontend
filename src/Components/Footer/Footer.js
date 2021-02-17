import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerTop">
          <div className="csCenter">
            <p>고객센터 안내</p>
            <p
              style={{
                fontSize: '30px',
                fontWeight: '700',
                marginBottom: '20px',
              }}
            >
              1833-8879
            </p>
            <div>
              <span>평일</span>
              <span>10:00 ~ 19:00(점심시간: 12:00 ~ 14:00)</span>
            </div>
          </div>
          <div className="companyinfo">
            <p>회사소개 및 약관 내용</p>
            <p>
              <a href="www.naver.com">회사소개</a>
            </p>
            <p>
              <a href="www.naver.com">공지사항</a>
            </p>
            <p>
              <a href="www.naver.com">이용약관</a>
            </p>
            <p>
              <a href="www.naver.com">개인정보처리방침</a>
            </p>
          </div>
          <div className="followus">
            <p>Follow Us</p>
            <div className="icons">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/145/145802.svg?token=exp=1613484926~hmac=4f0686651e616aac2df4508af0ff794d"
                alt="facebook"
              />
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/2111/2111463.svg?token=exp=1613484973~hmac=3d52c5d358bc7d766f474d85fff53a0e"
                alt="instagram"
              />
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            상호명: 주식회사 스타일 위 | 사업자 등록번호: 110-234-2455 |
            사업자등록정보 확인
          </p>
          <p>
            통신판매업신고: 제 2015-서울강남-028432호 | 주소: 서울특별시 강남구
            선릉로 24 | 대표자: 스타일 위 | 개인정보책임자: 스타일 위
          </p>
        </div>
      </footer>
    );
  }
}
