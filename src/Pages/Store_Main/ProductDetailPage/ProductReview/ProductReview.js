import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SimpleSlider from '../Slide/Slide';
import '../ProductReview/ProductReview.scss';

class ProductReview extends Component {
  state = {
    handleFeedModal: this.props.handleFeedModal,
  };

  // feedPushEvent = (e) => {
  //   console.log(this.props);
  //   // console.log(e.target);
  //   this.props.history.push('/feed/3');
  // };

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

    const { productReview } = this.props;

    return (
      <section className="reviewSection">
        <div className="titleContainer">
          <span className="nullBox"></span>
          <h1>상품후기 {productReview.length}</h1>
          <div>
            <span className="previewBtn">{dropdownIcon}</span>
            <span className="nextBtn">{dropdownIcon}</span>
          </div>
        </div>
        <SimpleSlider
          productReview={productReview}
          // handleFeedContent={this.feedPushEvent}
          handleFeedModal={this.state.handleFeedModal}
        />
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

export default withRouter(ProductReview);
