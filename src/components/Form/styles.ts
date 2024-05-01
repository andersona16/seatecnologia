import styled from "styled-components";

export const ContainerForm = styled.div`
  flex: 1 1 0%;

  border-radius: 20px;
  overflow: hidden;

  background-color: rgb(255 255 255);

  box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.1);

  > header {
    background-color: rgb(79 161 193);
    width: 100%;
    padding: 8px 0 8px 20px;
    color: rgb(255 255 255);

    font-size: 28px;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ContentForm = styled.div`
  display: flex;

  > div {
    display: flex;
    justify-content: center;

    gap: 24px;
    width: 100%;

    margin-top: 16px;

    border: 1px solid #649fbf;

    padding: 12px;

    border-radius: 10px;

    box-shadow: 0px 4px 4px 0px #00000026;

    > div {
      display: flex;
      justify-content: space-between;

      flex-direction: column;

      gap: 24px;

      width: 100%;
    }
  }
`;
