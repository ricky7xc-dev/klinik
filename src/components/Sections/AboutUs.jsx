import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/img1.jpeg";

export default function AboutUs() {
  return (
    <Wrapper id="aboutus">
      <div className="info-blocks">
        <div
          className="info-blocks__item info-blocks__item-reverse js-img"
          style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
        >
          <div className="wrapper">
            <div
              className="info-blocks__item-img"
              style={{
                backgroundImage: `url('/assets/img/main-bg.jpg')`,
              }}
            ></div>
            <div className="info-blocks__item-text">
              <span className="saint-text">About Us</span>
              <h2>Who we are</h2>
              <span className="info-blocks__item-descr">
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can’t refuse.
              </span>
              <p>
                Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim.
              </p>
              <Link href="/about">
                <a className="info-blocks__item-link">
                  <i className="icon-video"></i>
                  Watch video about us
                  <i className="icon-arrow-lg"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 30px;
`;

const ItemContent = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-repeat: no-repeat;
  flex-direction: row-reverse;
  background-position: left bottom;
  background-color: #fcedea;
`;

const WrapperItemContent = styled.section`
  position: initial;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: flex-end;
`;

const IniSection1 = styled.section`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: #faf9ff;
  width: 50%;
  // position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
