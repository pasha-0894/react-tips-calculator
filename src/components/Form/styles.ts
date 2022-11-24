import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 40px 65px 65px 65px 35px 61px auto;
  row-gap: 45px;
  padding-top: 60px;
`;

export const Header = styled.h1`
  @media (min-width: 744px) {
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 58px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-self: center;
  }

  @media (max-width: 744px) {
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-self: center;
  }
`;

export const Subheader = styled.h2`
  @media (min-width: 744px) {
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.3px;
    color: rgba(117, 108, 108, 0.57);
    justify-self: center;
  }

  @media (max-width: 744px) {
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.3px;
    color: rgba(117, 108, 108, 0.57);
    justify-self: center;
  }
`;

export const Total = styled.span`
  @media (min-width: 414px) {
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
    letter-spacing: -0.3px;
    color: #000000;
    margin-left: 25px;
    justify-self: center;
  }

  @media (max-width: 414px) {
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: -0.3px;
    color: #000000;
    margin-left: 25px;
    justify-self: center;
  }
`;
