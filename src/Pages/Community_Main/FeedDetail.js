import React, { Component } from 'react';
import './FeedDetail.scss';

export default class FeedDetail extends Component {
  constructor() {
    super();
    this.state = {
      isHoverOnImage: false,
      imageSrc: [
        'https://usercontents-c.styleshare.io/images/48754196/640x640',
        'https://usercontents-c.styleshare.io/images/48754197/640x640',
        'https://usercontents-c.styleshare.io/images/48754198/640x640',
        'https://usercontents-c.styleshare.io/images/48754199/640x640',
        'https://usercontents-c.styleshare.io/images/48754200/640x640',
      ],
      slideNum: 0,
    };
  }

  hoverImageOn = () => {
    this.setState({
      isHoverOnImage: true,
    });
  };

  hoverImageOff = () => {
    this.setState({
      isHoverOnImage: false,
    });
  };

  handlePresentImage = (e) => {
    console.log(e.target);
    this.setState({
      slideNum: e.target.data,
    });
  };

  prevImage = () => {
    this.setState({
      slideNum: this.state.slideNum - 1,
    });

    // if (this.state.slideNum >= this.state.imageSrc.length) {
    //   this.setState({
    //     slideNum: this.state.imageSrc.length,
    //   });
    // }
  };

  nextImage = () => {
    this.setState({
      slideNum: this.state.slideNum + 1,
    });

    // if (this.state.slideNum <= 0) {
    //   this.setState({
    //     slideNum: 0,
    //   });
    // }
  };

  render() {
    return (
      <div className="FeedDetail">
        <div className="leftContainer">
          <section className="carousel">
            <div className="topSection">
              <img
                className="presentImg"
                src={this.state.imageSrc[this.state.slideNum]}
                alt="presentImg"
                onMouseEnter={this.hoverImageOn}
                onMouseLeave={this.hoverImageOff}
              />
              <img
                className={
                  'arrow arrow-left' +
                  (this.state.isHoverOnImage && ' hoverOnImage')
                }
                src="https://www.flaticon.com/svg/vstatic/svg/570/570220.svg?token=exp=1613828052~hmac=35c0c1dd0f7c208b276be6606331f1fa"
                alt="leftArrow"
                onMouseEnter={this.hoverImageOn}
                onClick={this.prevImage}
              />
              <img
                className={
                  'arrow arrow-right' +
                  (this.state.isHoverOnImage && ' hoverOnImage')
                }
                src="https://www.flaticon.com/svg/vstatic/svg/467/467152.svg?token=exp=1613828027~hmac=aff396c8c4913f626e820244943aa723"
                alt="rightArrow"
                onMouseEnter={this.hoverImageOn}
                onClick={this.nextImage}
              />
            </div>

            <div className="bottomSection">
              <img
                src={this.state.imageSrc[1]}
                data-id="1"
                alt="image1"
                onClick={this.handlePresentImage}
              />
              <img
                src={this.state.imageSrc[2]}
                data-id="2"
                alt="image2"
                onClick={this.handlePresentImage}
              />
              <img
                src={this.state.imageSrc[3]}
                data-id="3"
                alt="image3"
                onClick={this.handlePresentImage}
              />
              <img
                src={this.state.imageSrc[4]}
                data-id="4"
                alt="image4"
                onClick={this.handlePresentImage}
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
          <section className="contentInBox productBox">
            <span>StyleWe에서 구입가능한 제품</span>
            <div className="product">
              <img
                src="https://usercontents-c.styleshare.io/images/fea85142-4803-43aa-816d-cffde52f68b0/80x80"
                alt=""
              />
              <div>
                <p className="productName">캠퍼스 레터 후드 풀오버</p>
                <p className="price">
                  35,900원 <span>29,000</span>
                </p>
              </div>
            </div>
          </section>

          <section className="contentInBox brandBox">
            <div className="brand">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/884/884485.svg?token=exp=1613909649~hmac=df80a627289988ea6469a2ec1239b282"
                alt="pant"
              />
              <div>
                <p>Top </p>
                <p>스파오 </p>
              </div>
            </div>
          </section>

          <section className="contentInBox feedContents">
            <div className="profile">
              <img
                className="profileImg"
                src="https://usercontents-c.styleshare.io/images/47984102/40x40"
                alt="profileImg"
              />
              <div>
                <p>안녕 하정훈</p>
                <p>Insta - hi_hoooon 협찬/문의 DM....</p>
              </div>
              <img
                className="follow"
                src="https://www.flaticon.com/svg/vstatic/svg/907/907873.svg?token=exp=1613991840~hmac=5a94b82bc0b18dc9a824527ae20a60ac"
                alt="follow"
              />
            </div>
            <p>
              요즘 베레모 내 모자 일순위야...
              <br />
              <br /> insta - hi_hooooon <br />
              <br />
              <span>
                #데일리룩 #데일리 #데일리코디 #인스타그램 #인플루언서 #베레모
                #베레모코디 #투명안경 #안경 #브이넥 #흑청 #흑청바지 #스타터
                #스타터신발 #흑청코디 #좋아요 #팔로우 #맞팔 #좋반
              </span>
            </p>
          </section>

          <section className="feedicons">
            <div>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/1077/1077086.svg?token=exp=1613994381~hmac=d6d142f3b5733fbc8570b1e69b05015e"
                alt="heart"
              />
              <span>40</span>
            </div>
            <img
              className="collectionImage"
              src="https://www.flaticon.com/svg/vstatic/svg/3580/3580085.svg?token=exp=1613994414~hmac=4ec4d8f1df0e2b803e95ee9adb9282c4"
              alt="collection"
            />
            <img
              className="moreImage"
              src="https://www.flaticon.com/svg/vstatic/svg/2089/2089792.svg?token=exp=1613994442~hmac=8e39ff24ca1c755a782b6d5654cdd303"
              alt="more"
            />
          </section>

          <section className="comments">
            <div className="topRow">
              <span>댓글(10)</span>
              <a href="www.naver.com">더보기</a>
            </div>
            <div className="commentsArea">
              <div className="singleComment">
                <img
                  src="https://usercontents-c.styleshare.io/images/48671419/30x30"
                  alt="profileImg"
                />
                <div class="commentText">
                  <p>
                    <span>채미</span>좋아요 누르고 가요
                  </p>
                  <p className="writtenDate">21.02.06</p>
                </div>
              </div>
              <div className="singleComment">
                <img
                  src="https://usercontents-c.styleshare.io/images/48671419/30x30"
                  alt="profileImg"
                />
                <div class="commentText">
                  <p>
                    <span>채미</span>좋아요 누르고 가요
                  </p>
                  <p className="writtenDate">21.02.06</p>
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
