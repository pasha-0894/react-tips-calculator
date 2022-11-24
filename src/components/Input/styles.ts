import styled from "styled-components";

export const StyledInput = styled.input`
  @media (min-width: 744px) {
    background: #ffffff;
    border-radius: 30px;
    border: none;
    width: 450px;
    height: 65px;
    justify-self: center;
    ::-webkit-textfield-decoration-container {
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    text-align: center;
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }

  @media (max-width: 744px) {
    background: #ffffff;
    border-radius: 30px;
    border: none;
    width: 331px;
    height: 65px;
    justify-self: center;
    ::-webkit-textfield-decoration-container {
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    text-align: center;
    font-family: "Noto Sans SC";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }
`;
