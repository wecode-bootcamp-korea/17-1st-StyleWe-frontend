import React, { Component } from 'react';
import './FeedUnit.scss';
import itemInfos from './itemInfos';
import profileImgs from './profileImgs';

export default class FeedUnit extends Component {
  state = {
    itemNum: Math.floor(Math.random() * 3 + 1),
    imgNum: Math.floor(Math.random() * 3 + 1),
    newItemArray: [],
  };

  componentDidMount() {
    this.setState({
      newItemArray: itemInfos.splice(0, this.state.itemNum),
    });
  }

  render() {
    const {
      key,
      username,
      mainimg,
      linkedProduct,
      feedtext,
      likedNumber,
      comments,
      commentsNum,
      createdTime,
    } = this.props;

    return (
      <div className="FeedUnit" key={key}>
        <img src={mainimg} alt="snsPicture" />

        {linkedProduct.product_name && (
          <section className="linkedProduct">
            <img src={linkedProduct.product_image} alt="productimg" />
            <div>
              <p className="productName">{linkedProduct.product_name}</p>
              <p className="price">
                <span className="new">
                  {`${Math.round(
                    linkedProduct.price * (1 - linkedProduct.discount_rate)
                  )} 원`}
                </span>
                <span className="old">{`${
                  linkedProduct.price.split('.')[0]
                } 원`}</span>
              </p>
            </div>
          </section>
        )}

        {linkedProduct.product_name &&
          this.state.newItemArray.map((item) => (
            <section className="productInformation">
              <div className="eachItem">
                <img src={item.iconUrl} alt="icon" />
                <div className="text">
                  <p>{item.product}</p>
                  <p>{item.brandName[this.state.itemNum]}</p>
                </div>
              </div>
            </section>
          ))}

        <section className="summary">
          <div className="summaryFeed">
            <img src={profileImgs[this.state.imgNum]} alt="profilepicture" />
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
                <img src={profileImgs[this.state.itemNum]} alt="profile" />
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
