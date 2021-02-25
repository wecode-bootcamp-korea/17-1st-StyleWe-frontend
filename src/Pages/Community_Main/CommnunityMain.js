
import React, { Component } from 'react';
import '../../Styles/commons.scss';
import './CommunityMain.scss';

import TopFeedSection from './TopFeedSection';
import FeedUnit from './FeedUnit';
import CreateModal from './CreateModal';
import Footer from '../../Components/Footer/Footer';
import StoreNav from '../../Components/Nav/StoreNav/StoreNav';
import FeedDetail from './FeedDetail';



export default class CommnunityMain extends Component {
  constructor() {
    super();
    this.state = {
     feedContent: [],
      isCreateModalOpen: false,
      isFeedDetailModalOpen: false,
      limit: 30,
      offset: 0,
      feedContainerHeight: 2400,
    };
  }

  getData = () => {
    const { limit, offset } = this.state;

    fetch(`http://10.58.6.61:8000/feed?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedContent: [...this.state.feedContent, ...data.feed_list],
        });
        window.addEventListener('scroll', this.infiniteScroll, true);
      });
  };

  componentDidMount() {
    this.getData();
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.getData();
      this.setState({
        offset: this.state.offset + this.state.limit,
        feedContainerHeight: this.state.feedContainerHeight + 2400,
      });

      this.componentDidMount();
    }
  };

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
      feedContainerHeight,
    } = this.state;


    document.body.style.overflow = isCreateModalOpen ? 'hidden' : 'auto';

    return (
      <>
        <StoreNav />
        <main className="CommunityMain">
          {(isCreateModalOpen || isFeedDetailModalOpen) && (
            <div
              className={'overlay active'}
              style={{ height: `${feedContainerHeight}px` }}
              onClick={this.handleFeedModal}
            ></div>
          )}

          <TopFeedSection />

          <p className="sectionTitle">지금의 트랜드</p>
          <div className="Feeds" style={{ height: `${feedContainerHeight}px` }}>
            {feedContent.map((feed) => {
              console.log(feed.feed_basic_data?.feed_id);
              return (
                <FeedUnit
                  key={feed.feed_basic_data?.feed_id}
                  username={feed.feed_basic_data.feed_user}
                  mainimg={feed.feed_basic_data.feed_main_image?.image_url}
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
      </>
    )
  }
}
