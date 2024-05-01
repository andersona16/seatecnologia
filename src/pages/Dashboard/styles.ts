import styled from "styled-components";

import backgroundImage from "../../assets/icons/background.svg";

export const DashboardContainer = styled.div`
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
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  max-height: 158px;
  padding: 24px;
  margin-top: 33px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.1);

  position: relative;
`;

export const MainContainer = styled.div`
  margin-top: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 92px;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 34px;
  }
`;

export const NextButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8px;
  margin-top: 8px;
  height: max-content;
  @media (min-width: 1024px) {
    height: auto;
  }

  > button {
    max-width: 194px;
    color: white;

    &:hover {
      background-color: rgba(0, 0, 255, 0.8);
    }
  }
`;
