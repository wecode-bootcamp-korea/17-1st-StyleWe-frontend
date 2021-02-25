import React, { Component } from 'react';
import axios from 'axios';
import './Uploadcontent.scss';

export default class UploadContent extends Component {
  constructor() {
    super();
    this.state = { imgBase64: '', imgFile: null };
  }

  handleAttatchment = (event) => {
    const img = event.target.files[0];
    const formData = new FormData();

    formData.append('file', img);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios.post('~', formData, config);

    for (const key of formData) console.log(key);

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

  sendForm = () => {};

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
                  src="https://www.flaticon.com/svg/vstatic/svg/1617/1617543.svg?token=exp=1614228779~hmac=7c4135870ec4ff9c74ec4b6475a8142f"
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
              multiple
            />
            <hr />
            <p className="description">설명</p>
            <textarea
              id="description"
              rows="5"
              cols="97"
              placeholder="내용을 입력해주세요"
              required
            />
            <hr />
            <button type="button" onClick={this.sendForm}>
              올리기
            </button>
          </form>
        </div>
      </div>
    );
  }
}
