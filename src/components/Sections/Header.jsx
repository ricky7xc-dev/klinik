import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/front1.jpeg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-scroll";

export default function Header() {
  return (
    // <Wrapper id="home" className="container flexSpaceCenter">
    //   <LeftSide className="flexCenter">
    //     <div>
    //       <h1 className="extraBold font60">Solution for your skincare</h1>
    //       <HeaderP className="font13 semiBold">
    //         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //         nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    //         erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    //         et ea rebum.
    //       </HeaderP>
    //       <BtnWrapper>
    //         <FullButton title="Get Started" />
    //       </BtnWrapper>
    //     </div>
    //   </LeftSide>
    //   <RightSide>
    //     <ImageWrapper>
    //       <Img
    //         className="radius8"
    //         src={HeaderImage}
    //         alt="office"
    //         style={{ zIndex: 9 }}
    //       />
    //       <QuoteWrapper className="flexCenter bgHome radius8">
    //         <QuotesWrapper>
    //           <QuotesIcon />
    //         </QuotesWrapper>
    //         <div>
    //           <p className="font15 whiteColor">
    //             <em>
    //               Friends, such as we desire, are dreams and fables. Friendship
    //               demands the ability to do without it.
    //             </em>
    //           </p>
    //           <p
    //             className="font13 orangeColor textRight"
    //             style={{ marginTop: "10px" }}
    //           >
    //             Ralph Waldo Emerson
    //           </p>
    //         </div>
    //       </QuoteWrapper>
    //       <DotsWrapper>
    //         <Dots />
    //       </DotsWrapper>
    //     </ImageWrapper>
    //     <GreyDiv className="lightBg"></GreyDiv>
    //   </RightSide>
    // </Wrapper>
    <MainBlock id="home">
      <Wrapper>
        <MBContent>
          <SaintText>Professional</SaintText>
          <MainText>Beauty &amp; Care</MainText>
          <p className="mainBlockP">
            Nourish your skin with toxin-free cosmetic products. With the offers
            that you can’t refuse.
          </p>

          <Link to="home">
            <BtnShop>Shop now</BtnShop>
          </Link>
        </MBContent>
      </Wrapper>
      <img
        className="mainBlockDecor"
        src="/assets/img/main-block-decor.png"
        alt=""
      />
    </MainBlock>
  );
}

const MainBlock = styled.section`
  padding-top: 110px;
  padding-bottom: 90px;
  background-image: url(/assets/img/ex-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
  @media (max-width: 480px) {
    background-image: none;
  }
`;

const Wrapper = styled.section`
  min-width: 320px;
  max-width: 1220px;
  padding: 0 40px 0 40px;
  margin: 0 auto;
  position: relative;
`;

const MBContent = styled.section`
  margin-left: -8px;
`;

const SaintText = styled.section`
  font-size: 60px;
  padding-left: 9px;
  font-family: "Mrs Saint Delafield";
  color: #d05278;
  display: block;
  font-size: 50px;
  text-transform: capitalize;
`;

const MainText = styled.section`
  line-height: normal;
  display: block;
  font-family: "Tenor Sans";
  color: #222222;
  font-size: 100px;
  margin-bottom: 30px;
  margin-top: 4px;
  @media (max-width: 991px) {
    font-size: 83px;
  }
  @media (max-width: 767px) {
    font-size: 58px;
  }
`;

const BtnShop = styled.section`
  height: 60px;
  line-height: 59px;
  outline: none;
  border: none;
  background: #222222;
  padding: 0 50px;
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  display: inline-block;
  transition: $transition;
  font-family: "Lato";
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
