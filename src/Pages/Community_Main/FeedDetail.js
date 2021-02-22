import React, { Component } from 'react';
import './FeedDetail.scss';

export default class FeedDetail extends Component {
  render() {
    return (
      <div className="FeedDetail">
        <div className="leftContainer">
          <section className="carousel">
            <div className="topSection">
              <img
                className="presentImg"
                src="https://usercontents-c.styleshare.io/images/48754196/640x640"
                alt="presentImg"
              />
              <img
                className="arrow arrow-left"
                src="https://www.flaticon.com/svg/vstatic/svg/570/570220.svg?token=exp=1613828052~hmac=35c0c1dd0f7c208b276be6606331f1fa"
                alt="leftArrow"
              />
              <img
                className="arrow arrow-right"
                src="https://www.flaticon.com/svg/vstatic/svg/467/467152.svg?token=exp=1613828027~hmac=aff396c8c4913f626e820244943aa723"
                alt="rightArrow"
              />
            </div>
            <div className="bottomSection">
              <img
                src="https://usercontents-c.styleshare.io/images/48754197/640x640"
                alt="image1"
              />
              <img
                src="https://usercontents-c.styleshare.io/images/48754198/640x640"
                alt="image2"
              />
              <img
                src="https://usercontents-c.styleshare.io/images/48754199/640x640"
                alt="image3"
              />
              <img
                src="https://usercontents-c.styleshare.io/images/48754200/640x640"
                alt="image4"
              />
            </div>
          </section>

          <section className="collections">
            <div className="topLine">
              <span>
                collected in <strong>1 Collection</strong>
              </span>
              <div className="arrow">
                <img
                  className="arrow-left"
                  src="https://www.flaticon.com/svg/vstatic/svg/892/892512.svg?token=exp=1613908978~hmac=e463a3fa066a66b2f2f092c116786c5e"
                  alt="left-arrow"
                />
                <img
                  className="arrow-right"
                  src="https://www.flaticon.com/svg/vstatic/svg/892/892528.svg?token=exp=1613909069~hmac=e554dbdd650c360948789c07bff16a9a"
                  alt="right-arrow"
                />
              </div>
            </div>
            <img
              className="collection"
              src="https://usercontents-c.styleshare.io/images/48846633/640x-"
              alt="collection"
            />
          </section>
        </div>

        <aside>
          <section className="boxInFeed productBox">
            <span>StyleWe에서 구입가능한 제품</span>
            <div className="productContent">
              <div className="product">
                <img
                  src="https://usercontents-c.styleshare.io/images/fea85142-4803-43aa-816d-cffde52f68b0/80x80"
                  alt=""
                />
                <p>캠퍼스 레터 후드 풀오버</p>
                <p>35,900원</p>
              </div>
            </div>
          </section>
          <section calssName="boxInFeed brandBox">
            <div className="brand">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/884/884485.svg?token=exp=1613909649~hmac=df80a627289988ea6469a2ec1239b282"
                alt="pant"
              />
              <p>Top </p>
              <p>스파오 </p>
            </div>
          </section>
          <section calssName="boxInFeed feedContents">feedContents</section>
          <section calssName="boxInFeed feedicons">feedicons</section>
          <hr />
          <section calssName="comments">
            <div className="topRow">
              <span>댓글(10)</span>
              <a href="www.naver.com">더보기</a>
            </div>
            <div className="commentsArea">
              <div className="singleComment">
                <img src="" alt="profileImg" />
                <div class="commentText">
                  <p>
                    <span>채미</span>좋아요 누르고 가요
                  </p>
                  <p>21.02.06</p>
                </div>
              </div>
            </div>
            <input type="text" placeholder="댓글을 남기세요" />
          </section>
        </aside>
      </div>
    );
  }
}
