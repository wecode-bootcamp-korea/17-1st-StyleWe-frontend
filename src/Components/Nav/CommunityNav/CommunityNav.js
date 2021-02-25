import React from "react";
import "./CommunityNav.scss";

class CommunityNav extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "flex",
      nonMemberDisplay: "flex",
      memberDisplay: "none",
    };
  }

  placeholderFocusEvent = () => {
    this.setState({
      display: "none",
    });
  };

  placeholderBlurEvent = (e) => {
    if (!e.target.value) {
      this.setState({
        display: "flex",
      });
    }
  };

  handleSignInEvent = () => {
    this.setState({
      nonMemberDisplay: "none",
      memberDisplay: "flex",
    });
  };

  handleSignOutEvent = () => {
    this.setState({
      nonMemberDisplay: "flex",
      memberDisplay: "none",
    });
  };

  render() {
    return (
      <nav className="communityNav">
        <section className="searchSection">
          <div className="navMenuWrapper">
            <img className="logo" alt="Logo" src="/images/styleWeLogo.png" />
            <div className="menuWrapper">
              <span>#OOTD</span>
              {/* 커뮤니티 메인 페이지 완성 후, <Link>태그 사용 예정 */}
              <span>STORE</span>
              {/* 스토어 상세 페이지 완성 후, <Link>태그 사용 예정 */}
            </div>
          </div>
          <div className="navSearchBarWrapper">
            <div className="searchBar">
              <input
                className="searchInput"
                type="search"
                onFocus={this.placeholderFocusEvent}
                onBlur={this.placeholderBlurEvent}
              />
              <div
                className="searchBarPlaceHolder"
                style={{ display: this.state.display }}
              >
                <img
                  className="searchIcon"
                  alt="search icon"
                  src="/images/searchIcon.svg"
                />
                <span>스타일과 상품을 검색해 보세요</span>
              </div>
            </div>
          </div>
          <div
            className="navNonMemberWrapper"
            style={{ display: this.state.nonMemberDisplay }}
          >
            <img
              className="bucketIcon"
              alt="장바구니"
              src="/images/paperBagIcon.svg"
            />
            <button className="signBtn" onClick={this.handleSignInEvent}>
              로그인/가입
            </button>
          </div>
          <div
            className="navMemberWrapper"
            style={{ display: this.state.memberDisplay }}
          >
            <img className="bellIcon" alt="알림" src="/images/bell.svg" />
            <img
              className="bucketIcon"
              alt="장바구니"
              src="/images/paperBagIcon.svg"
            />
            <img
              className="profileImageBtn"
              alt="프로필 이미지"
              src="/images/profileImage.png"
              onClick={this.handleSignOutEvent}
            />
          </div>
        </section>

        <div className="categoryTab">
          <span>인기</span>
          <span>데일리룩</span>
          <span>뷰티</span>
          <span>최신</span>
          <span>QnA</span>
          <span>팔로잉</span>
        </div>
      </nav>
    );
  }
}

export default CommunityNav;
