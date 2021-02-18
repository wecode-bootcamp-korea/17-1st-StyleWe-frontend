import React from "react";
import { withRouter } from "react-router-dom";
import "./signin.scss";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      password: "",
    };
  }

  handleInput = (e) => {
    // console.log("onChange");
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    this.props.history.push("/Main");
  };

  clickSignin = () => {
    fetch("http://10.58.1.192:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      // .then((result) => console.log("결과: ", result));
      .then((res) => this.testSignin(res));
  };

  testSignin = (res) => {
    //console.log(res)
    if (res.message === "SIGNIN_SUCCESS") {
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  };

  testSignin = () => {
    this.goToMain();
  };

  render() {
    //console.log()
    // const { user_name, password } = this.state;
    return (
      <div className="signinPage">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        />
        <div className="signinContainer">
          <div className="signinContainerWrapper">
            <div className="signinBox">
              <header>
                <p className="Logo">Style 'We'</p>
                <p className="loginTitle">로그인</p>
              </header>
              <main>
                {/* id,pw 유효성검사 추가구현으로 만들기 */}
                <div className="inputBox">
                  <div className="loginFormuserId">
                    <input
                      name="user_name"
                      onChange={this.handleInput}
                      type="text"
                      placeholder="ID/Email"
                    />
                  </div>
                  <div className="loginFormuserPassword">
                    <input
                      name="password"
                      onChange={this.handleInput}
                      type="password"
                      placeholder="비밀번호를 입력해 주세요."
                    />
                  </div>
                  <div className="loginFormButton">
                    <button
                      className="loginButton"
                      // className={
                      //   user_name.length > 2 && password.length > 5
                      //     ? "loginButton activeBtn"
                      //     : "loginButton inactiveBtn"
                      // }
                      // onClick={this.clickSignin}
                      onClick={this.goToMain}
                      type="button"
                    >
                      Signin
                    </button>
                  </div>
                </div>
                <div className="snsLoginForm">
                  <ul>
                    <li className="snsLoginFormList">
                      <button type="button" className="snsLoginFace">
                        <span>페이스북으로 로그인하기</span>
                      </button>
                      <button type="button" className="snsLoginTwit">
                        트위터로 로그인하기
                      </button>
                      <button type="button" className="snsLoginGoog">
                        구글로 로그인하기
                      </button>
                      <button type="button" className="snsLoginKakao">
                        카카오톡으로 로그인하기
                      </button>
                    </li>
                  </ul>
                </div>
              </main>
              <footer>
                <div className="bottomText">ID가 없으세요?</div>
                <a
                  className="bottomLinkJoin"
                  href="http://localhost:3000/signup"
                >
                  여기서가입
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signin);
