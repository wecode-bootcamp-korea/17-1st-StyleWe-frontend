import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slide.scss';

export default class SimpleSlider extends Component {
  render() {
    function SampleNextArrow(props) {
      console.log(props);
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: 'block', background: 'red' }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: 'block', background: 'green' }}
          onClick={onClick}
        />
      );
    }
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            infinite: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="slideContainer">
        <section>
          <Slider {...settings}>
            {this.props.productReview.map((reviewData) => {
              return (
                <>
                  <div key={reviewData.user_name} className="reviewImageHover">
                    <img
                      className="reviewImage"
                      alt="review"
                      src={reviewData['main_image']}
                    />
                  </div>
                  <div className="commentContainer">
                    <img
                      className="userImage"
                      alt="review"
                      src="images/profileImage.png"
                    />
                    <div className="userName">
                      {reviewData['user_name']}{' '}
                      <span className="description">
                        {reviewData['description']}
                      </span>
                    </div>
                  </div>
                  <span className="likeReviewNumber">
                    좋아요 {reviewData['like_number']} 댓글{' '}
                    {reviewData['comment_number']}
                  </span>
                </>
              );
            })}
          </Slider>
        </section>
      </div>
    );
  }
}
