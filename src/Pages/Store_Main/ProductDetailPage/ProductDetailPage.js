import React, { Component } from "react";
import "../ProductDetailPage/ProductDetailPage.scss";
import ThumbnailComponent from "./ThumbnailComponent/ThumbnailComponent";
import ProductReview from "./ProductReview/ProductReview";

export default class ProductDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      isOptionDropdownBtn: false,
      isSizeDropdownBtn: false,
      isDeliveryDropdown: false,
      optionPlaceholder: "",
      sizePlaceholder: "",
      productInfo: [],
      productReview: [],
      productCount: 1,
    };
  }

  componentDidMount() {
    this.getProductData();
  }

  // "http://10.58.6.1:8000/product/1"
  // "/data/mockProductDetail.json"

  getProductData = () => {
    fetch("/data/mockProductDetail.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          productInfo: [data["result"].product_basic],
          optionPlaceholder: data["result"].product_basic.first_option_name,
          sizePlaceholder: data["result"].product_basic.second_option_name,
          productReview: data.result.product_review.feed_basic,
        });
      });
  };

  handleSizeDropdownEvent = (e) => {
    this.setState({
      isSizeDropdownBtn: !this.state.isSizeDropdownBtn,
      sizePlaceholder: e.target.innerText,
    });
  };

  handleOptionDropdownEvent = (e) => {
    this.setState({
      isOptionDropdownBtn: !this.state.isOptionDropdownBtn,
      optionPlaceholder: e.target.innerText,
    });
  };

  handleSizeDropdownEvent = (e) => {
    this.setState({
      isSizeDropdownBtn: !this.state.isSizeDropdownBtn,
      sizePlaceholder: e.target.innerText,
    });
  };

  handleDeliveryDropdownEvent = () => {
    this.setState({
      isDeliveryDropdown: !this.state.isDeliveryDropdown,
    });
  };

  addProductList = () => {
    const { productInfo } = this.state;

    const newProductData = [
      ...productInfo,
      {
        firstOption: this.state.optionPlaceholder,
        secondOption: this.state.sizePlaceholder,
      },
    ];
    this.setState({
      productInfo: newProductData,
    });
  };

  countPlusEvent = () => {
    this.setState({
      productCount: this.state.productCount + 1,
    });
  };

  countMinusEvent = () => {
    if (this.state.productCount > 1) {
      this.setState({
        productCount: this.state.productCount - 1,
      });
    }
  };

  render() {
    const {
      productInfo,
      optionPlaceholder,
      sizePlaceholder,
      productReview,
      isOptionDropdownBtn,
      isSizeDropdownBtn,
      isDeliveryDropdown,
      productCount,
    } = this.state;

    return (
      <>
        <ThumbnailComponent
          productInfo={productInfo}
          optionPlaceholder={optionPlaceholder}
          sizePlaceholder={sizePlaceholder}
          isOptionDropdownBtn={isOptionDropdownBtn}
          isSizeDropdownBtn={isSizeDropdownBtn}
          isDeliveryDropdown={isDeliveryDropdown}
          handleOptionDropdownEvent={this.handleOptionDropdownEvent}
          handleSizeDropdownEvent={this.handleSizeDropdownEvent}
          handleDeliveryDropdownEvent={this.handleDeliveryDropdownEvent}
          addProductList={this.addProductList}
          countPlusEvent={this.countPlusEvent}
          countMinusEvent={this.countMinusEvent}
          productCount={productCount}
        />
        <ProductReview
          productReview={productReview}
          hoverImageOn={this.hoverImageOn}
          hoverImageOff={this.hoverImageOff}
          handlePresentImage={this.handlePresentImage}
          prevImage={this.prevImage}
        />
      </>
    );
  }
}
