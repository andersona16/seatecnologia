import { Layout, theme } from "antd";
import React, { ReactNode } from "react";

import icon01 from "../../../assets/img/icon1.svg";
import icon02 from "../../../assets/img/icon2.svg";
import icon03 from "../../../assets/img/icon3.svg";
import icon04 from "../../../assets/img/icon4.svg";
import icon05 from "../../../assets/img/icon5.svg";
import icon06 from "../../../assets/img/icon6.svg";
import { LayoutModify, MenuModify, SideModify } from "./styles";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

interface MyLayoutProps {
  children: ReactNode;
}

const MyLayout: React.FC<MyLayoutProps> = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <SideModify width={56}>
        <div className="demo-logo-vertical" />
        <MenuModify>
          <span></span>
          <div>
            <Link to="/d">
              <div>
                <img src={icon06} alt="Icon 6" />
              </div>
            </Link>
            <div>
              <img src={icon02} alt="Icon 2" />
            </div>
            <div>
              <img src={icon03} alt="Icon 3" />
            </div>
            <div>
              <img src={icon01} alt="Icon 1" />
            </div>
            <div>
              <img src={icon04} alt="Icon 4" />
            </div>
            <div>
              <img src={icon05} alt="Icon 5" />
            </div>
          </div>
        </MenuModify>
      </SideModify>

      <LayoutModify>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <h1>test</h1>
        </Header>

        <div style={{ display: "flex" }}>
          <Content
            style={{
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
          <Content
            style={{
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </div>
      </LayoutModify>
    </Layout>
  );
};

export default MyLayout;
