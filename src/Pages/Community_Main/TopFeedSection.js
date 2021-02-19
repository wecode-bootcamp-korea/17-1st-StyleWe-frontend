import React, { Component } from 'react';
import './TopFeedSection.scss';
import ColumnList from './ColumnList';
import TextOverImage from './TextOverImage';

export default class TopFeedSection extends Component {
  render() {
    return (
      <div className="TopFeedSection">
        <div className="bigColumn">
          <TextOverImage />
          <img
            src="https://images.unsplash.com/photo-1565720495169-5c21cb335f13?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGVlbiUyMGNvc21ldGljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="bigColumnPicture"
          />
          <div className="bigColumnContent">
            <img src="images/image.png" alt="logo" />
            <div className="author">
              <p>by</p>
              <p>StyleWe</p>
            </div>
            <div className="styleNum">
              <p>스타일</p>
              <p>21</p>
            </div>
            <div className="followNum">
              <p>팔로워</p>
              <p>60</p>
            </div>
          </div>
        </div>
        <div className="smallColumn">
          <img
            src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="smallColumnPicture"
          />
          <div className="textContent">
            민감한 피부를 가진 스쉐러들에게 #요즘대세 #피부빨간펜 🖍 더마코스메틱
            브랜드 리더스가 제안하는 특별한 스킨케어로... 더 보기
          </div>
          <div className="smallColumnContent">
            <div className="styleNum">
              <p>스타일</p>
              <p>21</p>
            </div>
            <div className="followNum">
              <p>팔로워</p>
              <p>60</p>
            </div>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/875/875068.svg?token=exp=1613445331~hmac=bcc6c406f4f5d836ba3b140bbd094f79"
              alt="add"
            />
          </div>
          <div className="styleWe">
            <img src="images/image.png" alt="logo" />
            <div className="author">
              <p>by</p>
              <p>StyleWe</p>
            </div>
          </div>
        </div>
        <div className="smallColumn">
          <img
            src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="smallColumnPicture"
          />
          <div className="textContent">
            민감한 피부를 가진 스쉐러들에게 #요즘대세 #피부빨간펜 🖍 더마코스메틱
            브랜드 리더스가 제안하는 특별한 스킨케어로... 더 보기
          </div>
          <div className="smallColumnContent">
            <div className="styleNum">
              <p>스타일</p>
              <p>21</p>
            </div>
            <div className="followNum">
              <p>팔로워</p>
              <p>60</p>
            </div>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/875/875068.svg?token=exp=1613445331~hmac=bcc6c406f4f5d836ba3b140bbd094f79"
              alt="add"
            />
          </div>
          <div className="styleWe">
            <img src="images/image.png" alt="logo" />
            <div className="author">
              <p>by</p>
              <p>StyleWe</p>
            </div>
          </div>
        </div>
        <div className="columnList">
          <ColumnList />
          <ColumnList />
          <ColumnList />
          <ColumnList />
          <ColumnList />
          <ColumnList />
          <ColumnList />
        </div>
      </div>
    );
  }
}
