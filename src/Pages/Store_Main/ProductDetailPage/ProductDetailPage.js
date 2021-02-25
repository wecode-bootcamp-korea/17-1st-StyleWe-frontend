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
    };
  }

  componentDidMount() {
    this.getProductData();
  }

  // "http://10.58.6.1:8000/product/1"
  // "/data/mockProductDetail.json"

  getProductData = () => {
    fetch("http://10.58.6.1:8000/product/6")
      .then((res) => res.json())
      .then((data) => {
        console.log("ThumbnailComponent >>>>> ", data);
        this.setState({
          productInfo: [data["result"].product_basic],
          optionPlaceholder: data["result"].product_basic.first_option_name,
          sizePlaceholder: data["result"].product_basic.second_option_name,
          productReview: data.result.product_review.feed_basic,
        });
      });
  };

  render() {
    const {
      productInfo,
      optionPlaceholder,
      isOptionDropdownBtn,
      isSizeDropdownBtn,
      sizePlaceholder,
      isDeliveryDropdown,
      productReview,
    } = this.state;
    return (
      <>
        <ThumbnailComponent
          productInfo={productInfo}
          optionPlaceholder={optionPlaceholder}
          isOptionDropdownBtn={isOptionDropdownBtn}
          isSizeDropdownBtn={isSizeDropdownBtn}
          sizePlaceholder={sizePlaceholder}
          isDeliveryDropdown={isDeliveryDropdown}
        />
        <ProductReview productReview={productReview} />
      </>
    );
  }
}
