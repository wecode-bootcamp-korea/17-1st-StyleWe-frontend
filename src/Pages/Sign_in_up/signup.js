// import { render } from "@testing-library/react";
import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./signup.scss";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      password: "",
      // confirm_password: "",
      nickname: "",
      alertMessage: "",
    };
  }

  handleInput = (e) => {
    // console.log("onChange");
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToSignupLast = () => {
    this.props.history.push("/SignupLast");
  };

  //   handleValidation = () => {
  //     console.log(this.state);
  //     // console.log(this.setstate);
  //     this.state.password === this.state.passwordConfirm
  //       ? this.setState({ alertMessage: "비밀번호 일치" })
  //       : this.setState({ alertMessage: "비밀번호가 일치 하지 않습니다." });
  //   };
  //password 일치만 나옴. 다시 찾아보기.

  clickSignup = () => {
    fetch("http://10.90.206.147:8000/user/signupinitial/", {
      method: "POST",
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password,
        nickname: this.state.nickname,
        email: this.state.email,
      }),
    })
      .then((res) => res.json())
      // .then((result) => console.log("결과: ", result));
      .then((res) => {
        console.log("백엔드 응답 메시지 >>>>", res, res.token);
        localStorage.setItem("token", res.token);
      });
    this.props.history.push("/SignupLast");
  };

  respoSignin = () => {
    this.goToSignupLast();
  };

  render() {
    return (
      <div className="signup">
        <img
          alt="backgroundphoto"
          src="https://images.unsplash.com/photo-1569748079281-dc67c9569015?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkzfHxzdHJlZXQlMjBmYXNoaW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
        <div className="signupContainer">
          <div className="signupContainerWrapper">
            <div className="signupBox">
              <header>
                <p className="Logo">Style 'We'</p>
                <p className="signupBoxTitle">회원가입</p>
              </header>
              <main>
                <div className="signupInputBox">
                  <div className="signupUserId">
                    <input
                      name="user_name"
                      onChange={this.handleInput}
                      type="text"
                      placeholder="ID"
                    />
                  </div>
                  <div className="signupUserPw">
                    <input
                      name="password"
                      onChange={this.handleInput}
                      type="password"
                      placeholder="비밀번호 (최소6자)"
                    />
                  </div>
                  <div className="signinUserNick">
                    <input
                      name="nickname"
                      onChange={this.handleInput}
                      type="text"
                      placeholder="닉네임을 입력하세요"
                    />
                  </div>
                  <div className="signinUsermail">
                    <input
                      name="email"
                      onChange={this.handleInput}
                      type="text"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                  {/* <input
          className="userSignupPwCheck"
          name="passwordConfirm"
          onKeyPress={this.handlePwCheck}
          onChange={this.handleValidation}
          type="password"
          placeholder="비밀번호 확인"
        /> */}
                  <div className="signupFormButton">
                    <button
                      className="signupbtn"
                      onClick={this.clickSignup}
                      // onClick={this.goToSignupLast}
                      type="button"
                      // token={this.clickSignup.res.token}
                    >
                      Signup
                    </button>
                  </div>
                </div>
                <div className="snsSignupForm">
                  <ul>
                    <li className="snsSignupList">
                      <button type="button" className="snsSignupFace">
                        페이스북으로 가입하기
                      </button>
                      <button type="button" className="snsSignupTwit">
                        트위터로 가입하기
                      </button>
                      <button type="button" className="snsSignupGoog">
                        구글로 가입하기
                      </button>
                      <button type="button" className="snsSignupKakao">
                        카카오톡으로 가입하기
                      </button>
                    </li>
                  </ul>
                </div>
              </main>
              <footer>
                <div className="bottomText">이미 계정을 갖고 계시다구요?</div>
                <div className="bottomLinkSignin">
                  <Link to="/signin">여기서 로그인</Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
