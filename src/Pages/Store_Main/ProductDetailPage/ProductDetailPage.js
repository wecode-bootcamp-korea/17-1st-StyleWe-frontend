import React, { Component } from "react";
import "../ProductDetailPage/ProductDetailPage.scss";
import ThumbnailComponent from "./ThumbnailComponent/ThumbnailComponent";
import ProductReview from "./ProductReview/ProductReview";

export default class ProductDetailPage extends Component {
  render() {
    return (
      <>
        <ThumbnailComponent />
        <ProductReview />
      </>
    );
  }
}
