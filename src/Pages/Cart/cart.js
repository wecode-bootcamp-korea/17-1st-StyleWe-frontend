import React, { Component } from "react";
import "./cart.scss";

export class cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cartBox">
          <div className="cartWrapper">
            <h1>장바구니</h1>
            <ul>
              <li>장바구니</li>
              <i className="fas fa-angle-right"></i>
              <li>주문결제</li>
              <i className="fas fa-angle-right"></i>
              <li>주문완료</li>
            </ul>
          </div>
          <div className="cartLayout">
            <div className="cartAllSelect">
              <label className="cartGoodsCheckBox">
                <input className="cartGoodsCheckInput" type="checkbox"></input>
                <span className="cartGoodsCheckText">전체선택</span>
                <button className="cartSelectDelite">삭제</button>
              </label>
            </div>
            <div className="goodsGroup">
              <thead>
                <tr>
                  <th colspan="2">주문상품</th>
                  <th>상품금액</th>
                  <th>주문금액</th>
                  <th>배송비</th>
                  <th>주문관리</th>
                </tr>
              </thead>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cart;

// .then((result) => {
//     console.log("=========");
//     console.log("백 메세지", result);
//     if (result.message === "SUCCESS") {
//       localStorage.setItem("token", result.Authorization);
//       this.propshistory.push("/Main");
//     }
//   });
