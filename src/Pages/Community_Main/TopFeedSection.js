import React, { Component } from 'react';
import './TopFeedSection.scss';
import FeedUnit from './FeedUnit';

export default class TopFeedSection extends Component {
  render() {
    return (
      <div className="TopFeedSection">
        <div className="bigColumn">
          <img
            src="https://images.unsplash.com/photo-1565720495169-5c21cb335f13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGVlbiUyMGNvc21ldGljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="bigColumnPicture"
          />
          <div className="bigColumnContent">
            <img
              src="https://cdn.logo.com/hotlink-ok/logo-social.png"
              alt="logo"
            ></img>
            <div className="author">
              <p>by</p>
              <p>StyleShare</p>
            </div>
            <div className="styleNum">
              <p>스타일</p>
              <p>21</p>
            </div>
            <div className="followNum">
              <p>팔로워</p>
              <p>60</p>
            </div>
          </div>
        </div>
        <div className="smallColumn">작은 컬럼</div>
        <div className="smallColumn">작은 컬럼</div>
        <div className="columnList">컬럼리스트</div>
      </div>
    );
  }
}
