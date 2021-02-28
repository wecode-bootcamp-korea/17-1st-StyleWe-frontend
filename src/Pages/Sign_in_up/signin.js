import React from 'react';
import { Link } from 'react-router-dom';
import './signin.scss';

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      password: '',
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  clickSignin = () => {
    fetch('http://10.58.2.215:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        user_name: this.state.user_name,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        if (result.message === 'SUCCESS') {
          localStorage.setItem('access_token', result.Authorization);
          this.props.history.push('/');
        } else if (result.message === 'INVALID_USER') {
          alert('아이디를 확인해주세요.');
        } else if (result.message === 'SIGNIN_FAIL') {
          alert('비밀번호를 확인해주세요.');
        }
      });
  };

  render() {
    return (
      <div className="signin">
        <div className="signinContainer">
          <div className="signinContainerWrapper">
            <div className="signinBox">
              <header>
                <p className="Logo">Style 'We'</p>
                <p className="loginTitle">로그인</p>
              </header>
              <main>
                <div className="loginInputBox">
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
                      onClick={this.clickSignin}
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
                <div className="bottomListSignup">
                  <Link to="/signup">여기서 가입</Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
