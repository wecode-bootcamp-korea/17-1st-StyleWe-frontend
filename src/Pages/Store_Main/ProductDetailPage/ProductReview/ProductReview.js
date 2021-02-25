import React, { Component } from "react";
import "../ProductReview/ProductReview.scss";

export default class ProductReview extends Component {
  constructor() {
    super();
    this.state = {
      productReview: [],
    };
  }

  componentDidMount() {
    this.getProductData();
  }

  getProductData = () => {
    console.log("fetch 위에 프로덕트 리뷰 >>>>", this.state.productReview);
    fetch("/data/mockProductDetail.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "fetch함수 속 리뷰 콘솔 >>>>>",
          data["product_review"].feed_basic
        );

        this.setState({
          productReview: data["product_review"].feed_basic,
        });
      });
  };

  render() {
    const dropdownIcon = (
      <svg
        className="dropdownIcon"
        viewBox="0 0 16 16"
        fill="currentColor"
        width="1em"
        height="1em"
      >
        <path
          fillRule="evenodd"
          d="M8.146 11.942a.213.213 0 01-.292 0L2.5 6.854 3.393 6l4.606 4.372L12.607 6l.893.854-5.354 5.088z"
        ></path>
      </svg>
    );

    const { productReview } = this.state;
    console.log("productReview >>> ", productReview.comment_number);

    return (
      <section className="reviewSection">
        <div className="titleContainer">
          <span className="nullBox"></span>
          <h1>상품후기 10</h1>
          <div>
            <span className="previewBtn">{dropdownIcon}</span>
            <span className="nextBtn">{dropdownIcon}</span>
          </div>
        </div>
        <div className="reviewComponentsContainer">
          {productReview.map((reviewData) => {
            console.log("리뷰데이터 맵 속 >>>", reviewData["comment_number"]);
            return (
              <div className="reviewComponent">
                <img
                  className="reviewImage"
                  alt="review"
                  src={reviewData["main_image"]}
                />
                <div className="commentContainer">
                  <img
                    className="userProfileImage"
                    alt="review"
                    src={reviewData["main_image"]}
                  />
                  <div className="userName">
                    {reviewData["user_name"]}{" "}
                    <span className="description">
                      {reviewData["description"]}
                    </span>
                  </div>
                </div>
                <span className="likeReviewNumber">
                  좋아요 {reviewData["like_number"]} 댓글{" "}
                  {reviewData["comment_number"]}
                </span>
              </div>
            );
          })}
        </div>
        <div className="reviewBtnBox">
          <div className="btnDivider">
            <button className="moreReviewBtn" type="button">
              후기 스타일 모두 보기
            </button>
          </div>
        </div>
      </section>
    );
  }
}
