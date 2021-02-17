import React, { Component } from 'react';
import './CreateModal.scss';

export default class CreateModal extends Component {
  constructor() {
    super();
    this.state = { isStyleHover: false, isCollectionHover: false };
  }

  styleToggleOn = () => {
    this.setState({
      isStyleHover: true,
    });
  };

  styleToggleOff = () => {
    this.setState({
      isStyleHover: false,
    });
  };

  collectionToggleOn = () => {
    this.setState({
      isCollectionHover: true,
    });
  };

  collectionToggleOff = () => {
    this.setState({
      isCollectionHover: false,
    });
  };

  render() {
    return (
      <div className="createModal">
        <div className="top">
          <p>업로드</p>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/748/748122.svg?token=exp=1613546046~hmac=b11675180900eff861173f8ea0b78727"
            alt="close"
            onClick={this.props.handleModal}
          />
        </div>
        <div className="boxContent">
          <div>
            <img
              className="style"
              src={
                this.state.isStyleHover
                  ? 'images/style2.png'
                  : 'images/style1.png'
              }
              alt="style"
              // onMouseOver={this.handleStyleHover}
              onMouseEnter={this.styleToggleOn}
              onMouseLeave={this.styleToggleOff}
            ></img>
            <p>스타일</p>
          </div>
          <div>
            <img
              className="collection"
              src={
                this.state.isCollectionHover
                  ? 'images/collection2.png'
                  : 'images/collection1.png'
              }
              alt="collection"
              // onMouseOver={this.handleCollectionHover}
              onMouseEnter={this.collectionToggleOn}
              onMouseLeave={this.collectionToggleOff}
            ></img>
            <p>콜렉션 만들기</p>
          </div>
        </div>
      </div>
    );
  }
}
