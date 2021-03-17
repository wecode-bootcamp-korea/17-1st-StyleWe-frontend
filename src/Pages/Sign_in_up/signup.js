import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      password: '',
      nickname: '',
      alertMessage: '',
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToSignupLast = () => {
    this.props.history.push('/SignupLast');
  };

  clickSignup = () => {
    fetch('http://10.58.2.215:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password,
        nickname: this.state.nickname,
        email: this.state.email,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('result: ', result);
        if (result.message === 'SUCCESS') {
          console.log('회원가입 성공');
          localStorage.setItem('access_token', result.access_token);
          this.props.history.push('/signuplast');
        } else if (result.message === 'USER_NAME_ALREADY_EXITS') {
          alert('아이디가 중복됩니다.');
        } else if (result.message === 'EMAIL_ALREADY_EXISTS') {
          alert('이메일이 중복됩니다.');
        } else if (result.message === 'SHORT_ID') {
          alert('아이디가 짧습니다');
        } else if (result.message === 'LONG_ID') {
          alert('아이디가 깁니다');
        } else if (result.message === 'SHORT_PASSWORD') {
          alert('비밀번호가 짧습니다.');
        }
      });
  };

  render() {
    return (
      <div className="signup">
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
                  <div className="signupFormButton">
                    <button
                      className="signupbtn"
                      onClick={this.clickSignup}
                      type="button"
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
