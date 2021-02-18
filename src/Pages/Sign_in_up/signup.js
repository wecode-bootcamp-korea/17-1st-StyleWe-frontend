// import { render } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom";
import "./signup.scss";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      password: "",
      passwordConfirm: "",
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

  //   handleValidation = () => {
  //     console.log(this.state);
  //     // console.log(this.setstate);
  //     this.state.password === this.state.passwordConfirm
  //       ? this.setState({ alertMessage: "비밀번호 일치" })
  //       : this.setState({ alertMessage: "비밀번호가 일치 하지 않습니다." });
  //   };
  //password 일치만 나옴. 다시 찾아보기.

  // clickSignup = () => {
  //   fetch("http://10.58.1.192:8000/user/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       user_name: this.state.user_name,
  //       password: this.state.password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log("결과: ", result));
  //   // .then((res) => this.testSignup(res));
  // };

  render() {
    return (
      <div className="signupPage">
        <input
          className="userSignupId"
          name="user_name"
          onChange={this.handleInput}
          type="text"
          placeholder="ID"
        />

        <input
          className="userSignupPw"
          name="password"
          onChange={this.handleInput}
          type="password"
          placeholder="비밀번호 (최소6자)"
        />

        {/* <input
          className="userSignupPwCheck"
          name="passwordConfirm"
          onKeyPress={this.handlePwCheck}
          onChange={this.handleValidation}
          type="password"
          placeholder="비밀번호 확인"
        /> */}

        <button onClick={this.clickSignup} type="button">
          Signup
        </button>
      </div>
    );
  }
}

export default withRouter(Signup);
