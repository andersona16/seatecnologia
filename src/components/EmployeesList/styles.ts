import styled from "styled-components";

interface ControlsContainerProps {
  showOnlyActiveEmployees: boolean;
}

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 2px 23px 0px #0000000d;
  background: var(--Pure, #ffffff);
  border-radius: 20px;
  height: auto;
`;

export const Header = styled.header`
  background-color: rgb(79 161 193);
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
  h1 {
    color: #fff;
    font-size: 28px;
  }
`;

export const ControlsContainer = styled.div<ControlsContainerProps>`
  padding: 16px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  height: 100%;

  > button {
    border-radius: 10px;
    height: 66px;
    border: 1px solid #649fbf;
    color: rgb(79 161 193);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
  }

  > div:nth-child(2) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(79 161 193);
    font-size: 14px;
    line-height: 20px;

    padding: 20px 0;

    > button {
      border-radius: 10px;
      height: 100%;
      border: 1px solid #649fbf;
      color: rgb(79 161 193);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      width: 100%;
    }

    > span {
      color: rgb(79 79 79);
      display: flex;
      align-items: center;
      justify-content: end;
      width: 50%;
      height: 100%;
      margin-top: 10px;
    }
  }
`;

export const ContainerInfoEployees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
  margin-top: 20px;
`;

export const ErrorMessage = styled.div`
  height: 180px;
  width: 100%;
  margin-top: 5px;
  color: #ff0000;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  margin-top: 8px;
  padding-right: 2px;
  font-size: 0.875rem;
  color: var(--gray-theme300);
`;

export const CustomButton = styled.button<{
  showOnlyActiveEmployees?: boolean;
}>`
  width: 100%;

  height: 32px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid #649fbf;
  color: rgb(79 161 193);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${(props) =>
    props.showOnlyActiveEmployees ? "var(--blue-theme)" : "var(--blue-theme)"};
  color: ${(props) => (props.showOnlyActiveEmployees ? "inherit" : "inherit")};
`;
