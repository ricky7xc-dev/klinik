import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
import ProjectBox from "../Elements/ProjectBox";

export default function Advantage() {
  return (
    <Advantages>
      <Wrapper>
        <AdvantagesItems>
          {/* card */}
          <AdvantagesItem>
            <AdvantagesItemIcon>
              <i className="icon-natural ukuranIcon"></i>
            </AdvantagesItemIcon>
            <h4 className="textAdvantage">Quality Control</h4>
            <p className="PTextAdvantage">
              Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
              anim velit adipisicing ea aliqua alluptate sit do do.
            </p>
          </AdvantagesItem>
          {/* card */}
          {/* card */}
          <AdvantagesItem>
            <AdvantagesItemIcon>
              <i className="icon-quality ukuranIcon"></i>
            </AdvantagesItemIcon>
            <h4 className="textAdvantage">Nice Services</h4>
            <p className="PTextAdvantage">
              Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
              anim velit adipisicing ea aliqua alluptate sit do do.
            </p>
          </AdvantagesItem>
          {/* card */}
          {/* card */}
          <AdvantagesItem>
            <AdvantagesItemIcon>
              <i className="icon-organic ukuranIcon"></i>
            </AdvantagesItemIcon>
            <h4 className="textAdvantage">Natural Product</h4>
            <p className="PTextAdvantage">
              Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
              anim velit adipisicing ea aliqua alluptate sit do do.
            </p>
          </AdvantagesItem>
          {/* card */}
        </AdvantagesItems>
      </Wrapper>
    </Advantages>
  );
}

const Advantages = styled.section`
  padding-top: 190px;
  @media (max-width: 767px) {
    padding-top: 60px;
  }
`;

const Wrapper = styled.section`
  min-width: 320px;
  max-width: 1220px;
  padding: 0 40px 0 40px;
  margin: 0 auto;
  position: relative;
`;

const AdvantagesItems = styled.section`
  display: flex;
  justify-content: center;
  margin-left: -12px;
  margin-right: -12px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    margin-left: 0;
    margin-right: 0;
  }
`;

const AdvantagesItem = styled.section`
  margin: 0 45px;
  width: calc(33.3% - 90px);
  text-align: center;
  @media (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 35px;
    width: 100%;
  }
`;

const AdvantagesItemIcon = styled.section`
  margin: auto;
  width: calc(33.3% - 90px);
  text-align: center;
  margin-bottom: 55px;
`;

const TrendingTop = styled.section`
  margin-bottom: 20px;
`;

const SaintText = styled.section`
  font-size: 60px;
  padding-left: 9px;
  font-family: "Mrs Saint Delafield";
  color: #d05278;
  display: block;
  font-size: 50px;
  text-transform: capitalize;
  max-width: 456px;
  text-align: center;
  margin: 0 auto;
  // margin-bottom: 56px;
  padding-left: 10px;
`;

const Hadua = styled.section`
  font-size: 54px;
  line-height: 54px;
  color: #222222;
  font-family: "Tenor Sans";
  text-transform: capitalize;
  font-weight: 400;
`;

const Pe = styled.section`
  margin-top: 30px;
`;

const TPItems = styled.section`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
`;

const TPItem = styled.section`
  width: calc(33.3% - 30px);
  margin: 0 15px;
  position: relative;
  height: 700px;
`;

// const Wrapper = styled.section`
//   width: 100%;
// `;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
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
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
