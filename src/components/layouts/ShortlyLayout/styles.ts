import styled from "styled-components";
import backgroundImage from "../../../assets/img/background.svg";
import Layout from "antd/es/layout/layout";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: right bottom;

  min-height: 100vh;
`;

export const LayoutModify = styled(Layout)`
  background-image: url(${backgroundImage});
  background-position: right bottom;
  display: flex;
  gap: 32px;
  height: 100vh;
  background-repeat: no-repeat;

  padding: 24px 32px;

  > header {
    background: #4fa1c1;
    border-radius: 20px;

    text-align: center;
    > h1 {
      font-size: 28px;
      color: #ffffff;
      font-weight: 400;
    }
  }
`;

export const SideModify = styled(Sider)`
  background: #649fbf !important;

  border-radius: 0px 20px 20px 0px;

  height: 767px;

  > ul {
    > li {
      padding: 0;
    }
  }
`;

export const MenuModify = styled(Menu)`
  background: #649fbf;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0px 20px 20px 0px;

  height: 100%;

  > span {
    width: 56px;
    height: 41px;
    background-color: #fff;

    top: 50px;
    position: absolute;
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 24px;

    color: #ffffffcc;

    height: 100%;

    > div {
      display: flex;
      align-items: center;

      padding: 5px 7px;
      background-color: #ffffffcc;

      width: 32px;
      height: 32px;

      border-radius: 10px;

      cursor: pointer;

      img {
        width: 19px;
        height: 22px;

        color: #ffffffcc;
      }
    }
  }
`;
