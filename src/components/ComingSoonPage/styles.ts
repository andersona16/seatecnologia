import styled from "styled-components";

import backgroundImage from "../../assets/icons/background.svg";

export const Container = styled.div`
  padding-right: 34px;
  padding-left: 92px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-image: url(${backgroundImage});
  background-position: right bottom;
  background-repeat: no-repeat;

  min-height: 100vh;

  > div:nth-child(2) {
    background-color: #4fa1c1;

    border-radius: 20px;

    width: 100%;
    height: 55px;

    margin-top: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    > h1 {
      color: #fff;
      font-size: 28px;
      line-height: 32.17px;
      font-weight: 400;
    }
  }
`;
