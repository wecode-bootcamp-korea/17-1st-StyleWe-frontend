import React, { Component } from 'react';
import './Uploadcontent.scss';

export default class UploadContent extends Component {
  render() {
    return (
      <div className="uploadContent">
        <div class="mainBox">
          <form action="" method="POST">
            <label for="imgFile">스타일 이미지</label>
            <input
              id="imgFile"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              required
            />
            <hr />
            <label for="">설명</label>
            <textarea />
            <hr />
            <button> 올리기 </button>
          </form>
        </div>
      </div>
    );
  }
}
