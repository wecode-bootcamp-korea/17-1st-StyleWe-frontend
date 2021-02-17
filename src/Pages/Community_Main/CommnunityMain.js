import React, { Component } from 'react';
import '../../Styles/commons.scss';
import './CommunityMain.scss';
import TopFeedSection from './TopFeedSection';
import FeedUnit from './FeedUnit';
import CreateModal from './CreateModal';
import Footer from '../../Components/Footer/Footer';

export default class CommnunityMain extends Component {
  constructor() {
    super();
    this.state = { comment: [], feedContent: [], isModalOpen: false };
  }

  getData = () => {
    fetch('http://localhost:3000/data/mockFeedData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          feedContent: data,
        })
      );
    fetch('http://localhost:3000/data/mockComments.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          comment: data,
        })
      );
  };

  componentDidMount() {
    this.getData();
  }

  goUp = () => {
    window.scrollTo(0, 0);
  };

  handleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    return (
      <div className="CommunityMain">
        <TopFeedSection />
        <p className="sectionTitle" style={{ alignSelf: 'flex-start' }}>
          지금의 트랜드
        </p>
        <div className="Feeds">
          {this.state.feedContent.map((feed) => {
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
                comment={this.state.comment}
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
        {this.state.isModalOpen && (
          <CreateModal handleModal={this.handleModal} />
        )}
        <Footer />
      </div>
    );
  }
}
