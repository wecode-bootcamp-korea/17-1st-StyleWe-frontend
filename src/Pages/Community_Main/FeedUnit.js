import React, { Component } from 'react';
import './FeedUnit.scss';

export default class FeedUnit extends Component {
  render() {
    const {
      comments,
      username,
      img,
      isLinked,
      isProductInformation,
      isCollected,
      sns,
      feedtext,
      likedNumber,
      handleFeedModal,
    } = this.props;

    return (
      <div className="FeedUnit">
        <img
          className="mainImage"
          src={img[0]}
          alt="snsPicture"
          onClick={handleFeedModal}
        />

        {!isLinked && (
          <section className="linkedProduct">
            <img
              src="https://images.unsplash.com/photo-1573461169389-77e57deb64cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGlwJTIwYmFsbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="lipbalm"
            />
            <div>
              <p className="productName">포인트 셔클 스웨트 셔츠</p>
              <p className="price">
                <span className="new">15,400</span>
                <span className="old">18,000</span>
              </p>
            </div>
          </section>
        )}

        {isProductInformation && (
          <section className="productInformation">
            <div className="eachItem">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/884/884485.svg?token=exp=1613458430~hmac=ef7b56cecb1519a20f64d621dbe6f289"
                alt="pants"
              />
              <div className="text">
                <p>pants</p>
                <p>빈티지</p>
              </div>
            </div>
            <div className="eachItem">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/884/884485.svg?token=exp=1613458430~hmac=ef7b56cecb1519a20f64d621dbe6f289"
                alt="pants"
              />
              <div className="text">
                <p>Pants</p>
                <p>빈티지</p>
              </div>
            </div>
            <div className="eachItem">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/2784/2784554.svg?token=exp=1613459085~hmac=351b9c8fceae7e50f093623409f1bc89"
                alt="pants"
              />
              <div className="text">
                <p>outer</p>
                <p>자켓</p>
              </div>
            </div>
          </section>
        )}

        <section className="summary">
          <div className="summaryFeed">
            <img
              src="https://usercontents-c.styleshare.io/images/48380668/120x120"
              alt="profilepicture"
            />
            <div className="InnerBox">
              <div className="topText">
                <span>{username}</span>
                <span>21.02.14</span>
              </div>
              <div className="bottomText">{feedtext}</div>
              <div className="icons">
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/535/535234.svg?token=exp=1613459712~hmac=935c39c6a563cb7de13a57fea96e27f1"
                  alt="like"
                />
                <span>{likedNumber}</span>
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/1946/1946412.svg?token=exp=1613459738~hmac=b547f11c148adcbdb8091f96eba8410d"
                  alt="comment"
                />
                <span>16</span>
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/747/747415.svg?token=exp=1613459784~hmac=2bf5999c77810265176b6788c1002937"
                  alt="collection"
                />
                <span>16</span>
              </div>
            </div>
          </div>
        </section>

        {comments.map((comment, index) => {
          if (index && index < 3) {
            return (
              <div key={comment.id} className="comments">
                <img src={comment.profileImgSrc} alt="profile" />
                <div>
                  <p>
                    <span>{comment.cmtUsername}</span> {comment.commentText}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
