import React, { Component } from 'react';
import './CommunityMain.scss';
import TopFeedSection from './TopFeedSection';
import FeedUnit from './FeedUnit';
import Footer from '../../Components/Footer/Footer';

export default class CommnunityMain extends Component {
  constructor() {
    super();
    this.state = { comment: [], feedContent: [] };
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

  render() {
    console.log(this.state.feedContent);
    console.log(this.state.comment);
    return (
      <div className="CommunityMain">
        <TopFeedSection />
        <p className="sectionTitle" style={{ 'align-self': 'flex-start' }}>
          지금의 트랜드
        </p>
        <div className="Feeds">
          <FeedUnit feedcontent={this.feedContent} comment={this.comment} />
        </div>
        <Footer />
      </div>
    );
  }
}
