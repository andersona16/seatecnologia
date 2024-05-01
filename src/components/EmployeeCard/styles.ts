import styled from "styled-components";

export const ContainerCard = styled.div`
  border-radius: 10px;

  background-color: rgb(237 241 245);

  padding-left: 15px;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  width: 100%;
  height: 84px;

  position: relative;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 8px;

    > p {
      color: rgb(112 112 112);

      font-size: 24px;
      line-height: 32px;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(79 161 193);

    height: 100%;

    max-width: 50px;

    color: #fff;

    cursor: pointer;

    margin: 0;
    border-radius: 0px 10px 10px 0;

    height: 100%;

    right: 0;

    position: absolute;

    &:hover {
      background-color: rgb(79 161 193 / 0.8);
    }
  }

  .badge {
    background-color: rgb(79 161 193);
    border-radius: 36px;
    padding: 4px 16px;
    padding-bottom: 4px;

    font-size: 14px;
    line-height: 20px;

    color: #fff;
  }
`;

export const DropdownMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 100px;

  z-index: 999;

  border-radius: 10px;

  padding: 8px 15px;
`;

export const DropdownItem = styled.div`
  padding: 8px 15px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
