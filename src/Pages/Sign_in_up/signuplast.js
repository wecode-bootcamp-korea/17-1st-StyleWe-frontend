import React from "react";
import { withRouter } from "react-router-dom";
import "./signuplast.scss";

class Signuplast extends React.Component {
  constructor() {
    super();
    this.state = {
      birth: "",
    };
  }

  handleInput = (e) => {
    console.log("onChange", e.target.value);

    this.setState({
      birth: e.target.value,
    });
  };

  clickSignuplast = () => {
    fetch("http://10.90.206.147:8000/user/signupfinal/", {
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        birth: this.state.birth,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(
          "앞 토큰값?? >>>>",
          localStorage.getItem("token", res.token)
        );
        console.log("localStorage", res);
        console.log("두번째 백엔드 응답 메시지 >>>>", res);
        localStorage.getItem("token", res.token);
      });
    this.props.history.push("/Main");
    // }
    // else {
    //   alert("No");
    // }
  };

  goToMain = () => {
    if (this.state.birth) {
      this.props.history.push("/Main");
    } else {
      alert("No");
    }
  };

  render() {
    return (
      <div className="signUpLast">
        <img
          alt="backgroundphoto"
          src="https://images.unsplash.com/photo-1569748079281-dc67c9569015?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkzfHxzdHJlZXQlMjBmYXNoaW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <div className="signupLastContainer">
          <div className="signupLastContainerWrapper">
            <div className="signupLastBox">
              <div className="profilePicturebox">
                <div className="profileUploadBox">
                  <h3>프로필</h3>
                </div>
                <button className="profileUploadbtn" type="button">
                  사진 선택
                </button>
              </div>
              <div className="profiledesk">
                <div className="profileSnsBtn">
                  <div className="profileSnsBox">
                    <button className="profileSnsRemain" type="button">
                      <span>페이스북 정보 불러오기</span>
                    </button>
                  </div>
                  <div className="profileinfo">
                    <div className="checkGender">
                      <p className="genderWrapper">
                        성별
                        <input type="radio" name="checklist" />
                        남자
                        <input type="radio" name="checklist" />
                        여자
                      </p>
                    </div>
                    <div className="checkBirth">
                      <p className="checkInputBirth">생일</p>
                      <input
                        type="text"
                        // className="checkBirthInput"
                        onChange={this.handleInput}
                        placeholder="ex)YYYY-MM-DD"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="agreeAllBox"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    className="agreeAllBtn"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      height: "140px",
                    }}
                  >
                    <div>
                      <input className="allCheck" id="agree" type="checkbox" />
                      <label for="agree">전체 동의</label>
                    </div>
                    <div>
                      <input
                        className="oneCheck"
                        id="agreeOne"
                        type="checkbox"
                      />
                      <label for="agreeOne">(필수)&nbsp;이용약관 동의</label>
                    </div>
                    <div>
                      <input
                        className="twoCheck"
                        id="agreeTwo"
                        type="checkbox"
                      />
                      <label for="agreeTwo">
                        (필수)&nbsp;개인정보 처리방침 동의
                      </label>
                    </div>
                    <div>
                      <input
                        className="threeCheck"
                        id="agreeThree"
                        type="checkbox"
                      />
                      <label for="agreeThree">
                        (필수)&nbsp;만 14세 이상 입니다
                      </label>
                    </div>
                    <div>
                      <input
                        className="fourheck"
                        id="agreeFour"
                        type="checkbox"
                      />
                      <label for="agreeFour">
                        (선택)&nbsp;마케팅 정보 수신 동의
                      </label>
                    </div>
                  </div>
                  <div className="signupLastBtn">
                    <button
                      className="lastBtn"
                      type="submit"
                      onClick={this.clickSignuplast}
                      // onClick={this.goToMain}
                      style={{
                        width: "100px",
                        height: "35px",
                        marginTop: "50px",
                        float: "right",
                        backgroundColor: "#4adaae",
                        borderWidth: "0",
                        borderRadius: "7px",
                        color: "white",
                      }}
                    >
                      다했어요
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signuplast);
