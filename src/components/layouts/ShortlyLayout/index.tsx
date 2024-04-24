import { Layout } from "antd";
import { Link } from "react-router-dom";

import icon01 from "../../../assets/img/icon1.svg";
import icon02 from "../../../assets/img/icon2.svg";
import icon03 from "../../../assets/img/icon3.svg";
import icon04 from "../../../assets/img/icon4.svg";
import icon05 from "../../../assets/img/icon5.svg";
import icon06 from "../../../assets/img/icon6.svg";
import { LayoutModify, MenuModify, SideModify } from "./styles";

const { Header } = Layout;

const ShortlyLayout = () => {
  return (
    <>
      <Layout>
        <SideModify width={56}>
          <div className="demo-logo-vertical" />
          <MenuModify>
            <span></span>
            <div>
              <div>
                <Link to="/tela-em-breve-1">
                  <img src={icon06} alt="Icon 6" />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <img src={icon02} alt="Icon 2" />
                </Link>
              </div>
              <div>
                <Link to="/tela-em-breve-2">
                  <img src={icon03} alt="Icon 3" />
                </Link>
              </div>
              <div>
                <Link to="/tela-em-breve-3">
                  <img src={icon01} alt="Icon 1" />
                </Link>
              </div>
              <div>
                <Link to="/tela-em-breve-4">
                  <img src={icon04} alt="Icon 4" />
                </Link>
              </div>
              <div>
                <Link to="/tela-em-breve-5">
                  <img src={icon05} alt="Icon 5" />
                </Link>
              </div>
            </div>
          </MenuModify>
        </SideModify>

        <LayoutModify>
          <Header>
            <h1>Em Breve</h1>
          </Header>
        </LayoutModify>
      </Layout>
    </>
  );
};

export default ShortlyLayout;
