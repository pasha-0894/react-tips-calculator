import styled from "styled-components";

export const CustomButton = styled.button`
  @media (min-width: 744px) {
    width: 459px;
    height: 61px;
    background: #2ed2c9;
    border: none;
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.3px;
    color: #ffffff;
    justify-self: center;
    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 744px) {
    width: 321px;
    height: 61px;
    background: #2ed2c9;
    border: none;
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.3px;
    color: #ffffff;
    justify-self: center;
    :hover {
      cursor: pointer;
    }
  }
`;
