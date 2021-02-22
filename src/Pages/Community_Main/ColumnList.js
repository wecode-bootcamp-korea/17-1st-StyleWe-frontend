import React, { Component } from 'react';
import './ColumnList.scss';

export default class ColumnList extends Component {
  render() {
    return (
      <div className="ColumnList">
        <div className="imgs">
          <img
            src="https://images.pexels.com/photos/128881/beautiful-girl-smiling-da-128881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="girl"
          />
          <img
            src="https://images.pexels.com/photos/128881/beautiful-girl-smiling-da-128881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="girl"
          />
        </div>
        <div>
          <p>헤비즘 베스트 &신상 ~ 68</p>
          <p>by 오직스쉐</p>
        </div>
      </div>
    );
  }
}
