import React from "react";
import { withRouter } from "react-router-dom";
import "./signuplast.scss";

class Signuplast extends React.Component {
  constructor() {
    super();
    this.state = {
      birth: "",
      // about(textarea으로)
      // website(url input으로)
      // input만들어서 와야됨
    };
  }

  handleInput = (e) => {
    console.log("onChange", e.target.value);

    this.setState({
      birth: e.target.value,
    });
  };

  clickSignuplast = () => {
    fetch("http://10.58.6.91:8000/user/signup/final", {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        birth: this.state.birth,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("result:", res);
        localStorage.getItem("token", res.token);
        this.props.history.push("/Main");
      });
  };

  // goToMain = () => {
  //   if (this.state.birth) {
  //     this.props.history.push("/Main");
  //   } else {
  //     alert("다시 입력해 주세요.");
  //   }
  // };

  render() {
    return (
      <div className="signUpLast">
        <div className="signUpLastWrapper">
          <section className="settingBox">
            <div className="settingPicBox">
              <div className="profilePicture">
                <h3>사진</h3>
              </div>
              <button className="profilePicBtn">사진 선택</button>
            </div>
            <div className="profileInputBox">
              <div className="snsInfoBtn">
                <button className="snsBtn" type="button">
                  페이스북 정보 불러오기
                </button>
              </div>
              <div className="infoInputBox">
                <fieldset className="genderfield">
                  <legend>성별</legend>
                  <input type="radio" name="checklist" /> 남자
                  <input type="radio" name="checklist" /> 여자
                </fieldset>
                <fieldset className="birthfield">
                  <legend>생일</legend>
                  <input
                    type="text"
                    onChange={this.handleInput}
                    name="birthDate"
                    placeholder="ex)YYYY-MM-DD"
                  />
                </fieldset>
                <fieldset className="webSitefield">
                  <legend>웹사이트</legend>
                  <input
                    type="text"
                    onChange={this.handleInput}
                    name="website"
                    placeholder="URL을 입력해주세요."
                    tabindex="1"
                    maxLength="256"
                  />
                </fieldset>
                <fieldset className="aboutfield">
                  <legend>자기소개</legend>
                  <textarea
                    name="bio"
                    onChange={this.handleInput}
                    placeholder="본인에 대해 알려주세요."
                    tabindex="1"
                    rows="4"
                    maxLength="200"
                  ></textarea>
                </fieldset>
              </div>
              <button
                className="btnDone"
                onClick={this.clickSignuplast}
                type="submit"
              >
                다 했어요
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Signuplast);
