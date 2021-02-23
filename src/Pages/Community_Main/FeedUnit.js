import React, { Component } from 'react';
import CreateModal from './CreateModal';
import './FeedUnit.scss';

export default class FeedUnit extends Component {
  render() {
    const {
      username,
      mainimg,
      linkedProduct,
      feedtext,
      likedNumber,
      comments,
      commentsNum,
      createdTime,
    } = this.props;
    console.log(mainimg);

    return (
      <div className="FeedUnit">
        <img src={mainimg} alt="snsPicture" />
        {linkedProduct.product_name && (
          <section className="linkedProduct">
            <img src={linkedProduct.product_image} alt="productimg" />
            <div>
              <p className="productName">{linkedProduct.product_name}</p>
              <p className="price">
                <span className="new">
                  {linkedProduct.price * (1 - linkedProduct.discount_rate)}
                </span>
                <span className="old">{linkedProduct.price}</span>
              </p>
            </div>
          </section>
        )}

        {linkedProduct.product_name && (
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
                <span>{createdTime}</span>
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
                <span>{commentsNum}</span>
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/747/747415.svg?token=exp=1613459784~hmac=2bf5999c77810265176b6788c1002937"
                  alt="collection"
                />
                <span>16</span>
              </div>
            </div>
          </div>
        </section>

        {comments.map((comment) => {
          if (comment.user) {
            return (
              <div className="comments">
                <img
                  src="https://usercontents-c.styleshare.io/images/48380668/120x120"
                  alt="profile"
                />
                <div>
                  <p>
                    <span>{comment.user}</span> {comment.content}
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
