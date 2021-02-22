import React from "react";
import "./StoreNav.scss";

class StoreNav extends React.Component {
  constructor() {
    super();
    this.state = {
      categoriesData: [],
      searchInputValue: "",
      hoverValue: "",
      isPlaceholder: false,
      isLogin: false,
    };
  }

  componentDidMount() {
    this.getCommentData();
  }

  getCommentData = () => {
    fetch("/data/navMenu.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          categoriesData: data,
        });
      });
  };

  searchOnChangeEvent = (e) => {
    this.setState({
      searchInputValue: e.target.value,
    });
  };

  handlePlaceholderEvent = () => {
    this.setState({
      isPlaceholder: true,
    });
  };

  handlePlaceholderBlurEvent = () => {
    if (!this.state.searchInputValue) {
      this.setState({
        isPlaceholder: false,
      });
    }
  };

  handleDisplayMemberEvent = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  handleCategoriesMouseHover = (e) => {
    this.setState({
      hoverValue: e.target.innerText,
    });
  };

  render() {
    const { isPlaceholder, isLogin, categoriesData, hoverValue } = this.state;

    return (
      <nav className="storeNav">
        <section className="storeNavSection">
          <section className="searchSection">
            <div className="navMenuWrapper">
              <img className="logo" alt="Logo" src="/images/styleWeLogo.png" />
              <div className="menuWrapper">
                <input type="submit" value="#OOTD" />
                {/* 커뮤니티 메인 페이지 완성 후, <Link>태그 사용 예정 */}
                <input type="submit" value="STORE" />
                {/* 스토어 상세 페이지 완성 후, <Link>태그 사용 예정 */}
              </div>
            </div>
            <div className="navSearchBarWrapper">
              <div className="searchBar">
                <input
                  className="searchInput"
                  type="search"
                  onChange={this.searchOnChangeEvent}
                  onClick={this.handlePlaceholderEvent}
                  onBlur={this.handlePlaceholderBlurEvent}
                />
                {!isPlaceholder && (
                  <div className="displayOnPlaceHolder">
                    <img
                      className="searchIcon"
                      alt="search icon"
                      src="/images/searchIcon.svg"
                    />
                    <span>스타일과 상품을 검색해 보세요</span>
                  </div>
                )}
              </div>
            </div>
            {!isLogin ? (
              <div className="nonMemberDisplay">
                <img
                  className="bucketIcon"
                  alt="장바구니"
                  src="/images/paperBagIcon.svg"
                />
                <button
                  className="signBtn"
                  onClick={this.handleDisplayMemberEvent}
                >
                  로그인/가입
                </button>
              </div>
            ) : (
              <div className="memberDisplay">
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
                  onClick={this.handleDisplayMemberEvent}
                />
              </div>
            )}
          </section>
          <ul className="catergoiesSection">
            {categoriesData.map((mainCategory) => {
              return (
                <>
                  <li
                    key={mainCategory.id}
                    className="storeCategories"
                    onMouseEnter={this.handleCategoriesMouseHover}
                  >
                    {mainCategory.catergoriesName}
                  </li>
                  {hoverValue === mainCategory.catergoriesName &&
                    mainCategory.subCatergoriesName !== null && (
                      <div
                        className="detailMenuTab"
                        onMouseLeave={this.handleCategoriesMouseHover}
                      >
                        <div className="wrapper">
                          {mainCategory.subCatergoriesName.map(
                            (subCategory) => {
                              return (
                                <div className="subCategory">{subCategory}</div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                </>
              );
            })}
          </ul>
        </section>
        <div className="hoverBackgroudColor"></div>
      </nav>
    );
  }
}

export default StoreNav;
