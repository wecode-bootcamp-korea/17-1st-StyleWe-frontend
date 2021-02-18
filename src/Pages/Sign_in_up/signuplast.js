import React from "react";
import { withRouter } from "react-router-dom";
import "./signuplast";

class Signuplast extends React.Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      email: "",
    };
  }

  handleInput = (e) => {
    // console.log("onChange");
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  //   clickSignuplast = () => {
  //     fetch("http://10.58.1.192:8000/user/signup", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         user_name: this.state.user_name,
  //         password: this.state.password,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => console.log("결과: ", result));
  //     // .then((res) => this.testSignup(res));
  //   };

  render() {
    return (
      <div className="signupLastPage">
        <input
          className="userSignupNickName"
          name="nickname"
          onChange={this.handleIdInput}
          type="text"
          placeholder="닉네임을 입력하세요."
        />
        <input
          className="userSignupLastEmail"
          name="email"
          onChange={this.handleEmailInput}
          type="text"
          placeholder="이메일을 입력해주세요."
        />
        <input type="checkbox" name="gender" value="male" />
        남자
        <input type="checkbox" name="gender" value="female" />
        여자
        <button onClick={this.clickSignuplast} type="button">
          다 했어요.
        </button>
      </div>
    );
  }
}

export default withRouter(Signuplast);
