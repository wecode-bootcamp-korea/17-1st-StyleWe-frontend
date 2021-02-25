import React, { Component } from 'react';
import './FeedUnit.scss';

export default class FeedUnit extends Component {
  state = {
    itemNum: Math.floor(Math.random() * 3 + 1),
    newItemArray: [],
  };

  componentDidMount() {
    const itemInfos = [
      {
        product: 'shoes',
        brandName: ['르꼬끄', '아디다스', '락포트', '컨버스'],
        iconUrl:
          'https://www.flaticon.com/svg/vstatic/svg/892/892453.svg?token=exp=1614231066~hmac=7d7379daf436ed06a40c0a42575404f2',
      },
      {
        product: 'outer',
        brandName: ['리버시블', '메종미네드', '23.65', '널디'],
        iconUrl:
          'https://www.flaticon.com/svg/vstatic/svg/1985/1985620.svg?token=exp=1614231192~hmac=0dd7ba37e981dc56cf117290f9a01140',
      },
      {
        product: 'pants',
        brandName: ['에이들', '캘빈클라인', '무아무아', '소나'],
        iconUrl:
          'https://www.flaticon.com/svg/vstatic/svg/884/884485.svg?token=exp=1614231229~hmac=107317e74fceb865309aab36f41efc6a',
      },
      {
        product: 'Top',
        brandName: ['텐블레이드', '마크엠', '커버낫', '청남방'],
        iconUrl:
          'https://www.flaticon.com/svg/vstatic/svg/3637/3637365.svg?token=exp=1614231369~hmac=1d8f6b69994aa8f1bc81d4092d2f91a9',
      },
      {
        product: 'watch',
        brandName: ['논논(NoneNone)', '롤렉스', '와치'],
        iconUrl:
          'https://www.flaticon.com/svg/vstatic/svg/878/878913.svg?token=exp=1614231333~hmac=9701e3e495665b6b6889e393e768c881',
      },
    ];

    this.setState({
      newItemArray: itemInfos.splice(0, this.state.itemNum),
    });
  }

  render() {
    console.log(this.state.newItemArray);

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
