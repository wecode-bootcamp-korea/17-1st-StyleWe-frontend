import React, { Component } from 'react';
import '../ThumbnailComponent/ThumbnailComponent.scss';

export default class ThumbnailComponent extends Component {
  render() {
    const dropdownIcon = (
      <svg
        className="dropdownIcon"
        viewBox="0 0 16 16"
        fill="currentColor"
        width="1em"
        height="1em"
      >
        <path
          fillRule="evenodd"
          d="M8.146 11.942a.213.213 0 01-.292 0L2.5 6.854 3.393 6l4.606 4.372L12.607 6l.893.854-5.354 5.088z"
        ></path>
      </svg>
    );
    const downloadIcon = (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="1em"
        height="1em"
        className="sc-hBEYos jgQLNX"
      >
        <path
          fillRule="evenodd"
          d="M13.5 13.94l3.97-3.97a.75.75 0 011.06 1.06l-5.038 5.038a1.05 1.05 0 01-1.484 0L6.97 11.03a.75.75 0 011.06-1.06L12 13.94V3.75a.75.75 0 111.5 0v10.19zM3 15.75a.75.75 0 111.5 0v3c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-3a.75.75 0 111.5 0v3A2.25 2.25 0 0120.25 21h-15A2.25 2.25 0 013 18.75v-3z"
        ></path>
      </svg>
    );
    const {
      productInfo,
      optionPlaceholder,
      isOptionDropdownBtn,
      isSizeDropdownBtn,
      isDeliveryDropdown,
      sizePlaceholder,
      handleDeliveryDropdownEvent,
      handleOptionDropdownEvent,
      handleSizeDropdownEvent,
      addProductList,
      productCount,
      countPlusEvent,
      countMinusEvent,
    } = this.props;

    return (
      <main className="thumbnailComponent">
        {productInfo.map((productData, idx) => {
          const originalPrice =
            Math.round(
              Number(
                productData.original_price.slice(
                  0,
                  productData.original_price.indexOf('.')
                )
              ) / 10
            ) * 10;
          const discountRate = Number(
            Number(productData.discount_rate).toFixed(2)
          );

          const discountPrice =
            Math.round(
              Number(originalPrice - originalPrice * discountRate).toFixed(0) /
                10
            ) * 10;
          return (
            <section key={idx} className="productInfoSection">
              <h1>{productData.brand_name}</h1>
              <h2>{productData.product_name}</h2>
              <section className="productInfo">
                <div className="orderTabContainer">
                  <img alt="thumbnail" src={productData.thumbnail_image} />
                  <div className="orderTab">
                    <p>최대 쿠폰 적용 가격</p>
                    <div className="priceDetail">
                      <div>
                        <span className="salePercent">
                          {discountRate * 100}%
                        </span>
                      </div>
                      <div>
                        <span className="salePrice">
                          {discountPrice.toLocaleString()}
                        </span>
                        <span>원</span>
                      </div>
                      <div className="orginalPriceContainer">
                        <span className="noSalePrice">
                          {originalPrice.toLocaleString()}원
                        </span>
                        <input type="checkbox" id="couponDropDownBtn" />
                        <label htmlFor="couponDropDownBtn">
                          {dropdownIcon}
                        </label>
                      </div>
                      <button type="button" className="couponDownloadBtn">
                        {/* 쿠폰 다운&nbsp;{downloadIcon} */}
                      </button>
                    </div>
                    <div className="countLikeReview">
                      <span className="likeText">좋아요</span>
                      <span className="likeCount">1,965</span>
                      <span className="reviewText">후기</span>
                      <span className="reviewCount">19</span>
                    </div>
                    <div className="deliveryContainer">
                      <div className="myPointInfo">
                        <h3 className="containerTitle">내 단추</h3>
                        <span className="boldText">12,968</span>
                        <span>개 사용 가능</span>
                      </div>
                      <div className="deliveryInfo">
                        <h3 className="containerTitle">배송 가격</h3>
                        <span className="boldText">무료 배송&nbsp;</span>
                        <input type="checkbox" id="deliveryDropDownBtn" />
                        <label
                          htmlFor="deliveryDropDownBtn"
                          onClick={handleDeliveryDropdownEvent}
                        >
                          {dropdownIcon}
                        </label>
                      </div>
                      {isDeliveryDropdown && (
                        <div className="deliveryInfo">
                          <span className="containerTitle"></span>
                          <span className="deliveryDetailInfo">
                            제주/도서산간 추가배송비 1,000원~10,000원
                          </span>
                        </div>
                      )}

                      <div className="deliveryNotice">
                        <h3 className="containerTitle">출고 안내</h3>
                        <span>내일 2/23 화요일 출고 예정</span>
                      </div>
                    </div>
                    <div className="optionDropdownContainer">
                      <button
                        type="button"
                        className="optionSelectBox"
                        onClick={handleOptionDropdownEvent}
                      >
                        <span>{optionPlaceholder}</span>
                        {dropdownIcon}
                      </button>
                      {isOptionDropdownBtn && (
                        <div onClick={handleOptionDropdownEvent}>
                          <ul
                            className="optionList"
                            onClick={handleOptionDropdownEvent}
                          >
                            {productData.first_options.map(
                              (firstOptionData, idx) => {
                                return (
                                  <li key={idx} className="option">
                                    {firstOptionData}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      )}
                      <button
                        type="button"
                        className="sizeSelectBox"
                        onClick={handleSizeDropdownEvent}
                        disabled={
                          optionPlaceholder === productData.first_option_name &&
                          'disabled'
                        }
                      >
                        <span>{sizePlaceholder}</span>
                        {dropdownIcon}
                      </button>
                      {isSizeDropdownBtn && (
                        <div onClick={handleSizeDropdownEvent}>
                          <ul
                            className="sizeList"
                            onClick={handleSizeDropdownEvent}
                          >
                            {productData.second_options.map(
                              (secondOptionData, idx) => {
                                return (
                                  <li key={idx} className="option">
                                    {secondOptionData}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                    {sizePlaceholder !== productData.second_option_name && (
                      <div className="addProductList">
                        <p>
                          {optionPlaceholder} / {sizePlaceholder}
                        </p>
                        <div className="countContainer">
                          <div className="btnContainer">
                            <button
                              className="countBtn"
                              onClick={countMinusEvent}
                            >
                              -
                            </button>
                            <span>{productCount}</span>
                            <button
                              className="countBtn"
                              onClick={countPlusEvent}
                            >
                              +
                            </button>
                          </div>

                          <span className="addProductPrice">
                            {(productCount * discountPrice).toLocaleString()}원
                          </span>
                        </div>
                        <div className="totalPriceContainer">
                          <span className="totalPriceText">총 가격</span>
                          <span className="totalPrice">
                            {(productCount * discountPrice).toLocaleString()}원
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="submitSection">
                      <button type="submit" className="buyBtn">
                        바로 구매
                      </button>
                      <button type="submit" className="bucketBtn">
                        장바구니 담기
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <div className="brandSection">
                <img alt="brandImageSample" src={productData.thumbnail_image} />
                <div className="brandWrapper">
                  <div className="brandName">
                    {productData.brand_name}
                    <div className="brandProducts">12,898</div>
                  </div>
                  {dropdownIcon}
                </div>
              </div>
            </section>
          );
        })}
      </main>
    );
  }
}
