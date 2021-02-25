import React, { Component } from 'react';
import './ColumnList.scss';

export default class ColumnList extends Component {
  render() {
    const { imgSrc1, imgSrc2, content, author } = this.props;

    return (
      <div className="ColumnList">
        <div className="imgs">
          <img src={imgSrc1} alt="image1" />
          <img src={imgSrc2} alt="image2" />
        </div>
        <div>
          <p>{content}</p>
          <p>`by ${author}`</p>
        </div>
      </div>
    );
  }
}
