import React, { Component } from 'react';
import './CreateModal.scss';

export default class CreateModal extends Component {
  constructor() {
    super();
    this.state = { isStyle: false, isCollection: false };
  }

  toggleOn = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: true,
    });
  };

  toggleOff = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: false,
    });
  };

  render() {
    const { isStyle, isCollection } = this.state;

    return (
      <div className="CreateModal">
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
              name="isStyle"
              src={isStyle ? 'images/style2.png' : 'images/style1.png'}
              alt="style"
              onMouseEnter={this.toggleOn}
              onMouseLeave={this.toggleOff}
            />
            <p>스타일</p>
          </div>
          <div>
            <img
              className="collection"
              name="isCollection"
              src={
                isCollection
                  ? 'images/collection2.png'
                  : 'images/collection1.png'
              }
              alt="collection"
              onMouseEnter={this.toggleOn}
              onMouseLeave={this.toggleOff}
            />
            <p>콜렉션 만들기</p>
          </div>
        </div>
      </div>
    );
  }
}
