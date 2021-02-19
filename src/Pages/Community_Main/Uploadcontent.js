import React, { Component } from 'react';
import './Uploadcontent.scss';

export default class UploadContent extends Component {
  constructor() {
    super();
    this.state = { imgBase64: '', imgFile: null };
  }

  handleAttatchment = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;

      if (base64) {
        this.setState({
          imgBase64: base64.toString(),
        });
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      this.setState({
        imgFile: event.target.files[0],
      });
    }
  };

  handleRemove = () => {
    this.setState({
      imgBase64: '',
      imgFile: null,
    });
  };

  render() {
    return (
      <div className="uploadContent">
        <div className="mainBox">
          <form action="" method="POST">
            <p>스타일 이미지</p>
            {this.state.imgBase64 && (
              <>
                <img src={this.state.imgBase64} alt="shownImage" />
                <img
                  src="https://www.flaticon.com/svg/vstatic/svg/1617/1617543.svg?token=exp=1613655420~hmac=4fb4fd9e6a908b37f25da129e5e81264"
                  className="closeButton"
                  onClick={this.handleRemove}
                  alt="close"
                />
              </>
            )}
            <label for="imgFile"></label>
            <input
              id="imgFile"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={this.handleAttatchment}
              required
            />
            <hr />
            <p className="description">설명</p>
            <textarea
              id="description"
              rows="5"
              cols="97"
              placeholder="내용을 입력해주세요"
            />
            <hr />
            <button> 올리기 </button>
          </form>
        </div>
      </div>
    );
  }
}
