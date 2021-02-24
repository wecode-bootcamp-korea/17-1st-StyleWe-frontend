import React, { Component } from "react";
import "../../Styles/commons.scss";
import "./CommunityMain.scss";
import TopFeedSection from "./TopFeedSection";
import FeedUnit from "./FeedUnit";
import CreateModal from "./CreateModal";
import Footer from "../../Components/Footer/Footer";
import StoreNav from "../../Components/Nav/StoreNav/StoreNav";


export default class CommnunityMain extends Component {
  constructor() {
    super();
    this.state = {
      feedContent: [],
      isCreateModalOpen: false,
      isFeedDetailModalOpen: false,
    };
  }

  getData = () => {
<<<<<<< HEAD
    const LIMIT = 30;
    const OFFSET = 0;

    fetch(`http://10.58.1.214:8000/feed?limit=${LIMIT}&offset=${OFFSET}`)
=======
    fetch("/data/mockFeedData.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          feedContent: data,
        })
      );
    fetch("/data/mockComments.json")
>>>>>>> main
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedContent: data.feed_list,
        });
      });
  };

  componentDidMount() {
    // this.getData();
  }

  goUp = () => {
    window.scrollTo(0, 0);
  };

  handleCreateModal = () => {
    this.setState({
      isCreateModalOpen: !this.state.isCreateModalOpen,
    });
  };

  handleFeedModal = () => {
    this.setState({
      isFeedDetailModalOpen: !this.state.isFeedDetailModalOpen,
    });
  };

  render() {
    const {
      feedContent,
      isCreateModalOpen,
      isFeedDetailModalOpen,
    } = this.state;

<<<<<<< HEAD
    document.body.style.overflow = isCreateModalOpen ? 'hidden' : 'auto';

    return (
      <main className="CommunityMain">
        {(isCreateModalOpen || isFeedDetailModalOpen) && (
          <div
            className={'overlay active'}
            onClick={this.handleFeedModal}
          ></div>
        )}

        <TopFeedSection />

        <p className="sectionTitle">지금의 트랜드</p>
        <div className="Feeds">
          {feedContent.map((feed) => {
            return (
              <FeedUnit
                className="FeedUnit"
                key={feed.feed_basic_data.feed_id}
                username={feed.feed_basic_data.feed_user}
                mainimg={feed.feed_basic_data.feed_main_image.image_url}
                linkedProduct={feed.product_data}
                feedtext={feed.feed_basic_data.description}
                likedNumber={feed.feed_basic_data.like_number}
                comments={feed.feed_comment_data.comment_list}
                commentsNum={feed.feed_comment_data.feed_comment_count}
                createdTime={feed.feed_basic_data.created_at.split('T')[0]}
                handleFeedModal={this.handleFeedModal}
              />
            );
          })}
        </div>

        <img
          src="https://www.flaticon.com/svg/vstatic/svg/992/992703.svg?token=exp=1614145828~hmac=fab6e6a27940e0f8d9d96bfbc29aa2fb"
          alt="up"
          className="upScroll"
          onClick={this.goUp}
        />
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/189/189689.svg?token=exp=1613538352~hmac=46f7b19be59420e6ad5cd995d78fa1ab"
          alt="add"
          className="createContent"
          onClick={this.handleCreateModal}
        />

        {isCreateModalOpen && (
          <CreateModal handleCreateModal={this.handleCreateModal} />
        )}

        <Footer />
      </main>
=======
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";

    return (
      <>
        <StoreNav />
        <main className="CommunityMain">
          <div className={"overlay " + (isModalOpen && "active")}></div>
          <TopFeedSection />
          <p className="sectionTitle">지금의 트랜드</p>
          <div className="Feeds">
            {feedContent.map((feed) => {
              return (
                <FeedUnit
                  className="FeedUnit"
                  key={feed.id}
                  username={feed.username}
                  img={feed.feedImages}
                  isLinked={feed.isLinkedProduct}
                  isProductInformation={feed.isProductInformation}
                  isCollected={feed.isCollected}
                  sns={feed.sns}
                  feedtext={feed.FeedText}
                  likedNumber={feed.LikedNumber}
                  comments={comment}
                />
              );
            })}
          </div>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/633/633773.svg?token=exp=1613537376~hmac=81fad313487f80917104ace958e971ce"
            alt="up"
            className="upScroll"
            onClick={this.goUp}
          />
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/189/189689.svg?token=exp=1613538352~hmac=46f7b19be59420e6ad5cd995d78fa1ab"
            alt="add"
            className="createContent"
            onClick={this.handleModal}
          />
          {isModalOpen && (
            <CreateModal
              handleModal={this.handleModal}
              isModalOpen={isModalOpen}
            />
          )}
          <Footer />
        </main>
      </>
>>>>>>> main
    );
  }
}
