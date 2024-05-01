import homeIcon from "../../assets/icons/home.svg";
import editIcon from "../../assets/icons/edit.svg";
import connectionsIcon from "../../assets/icons/connections.svg";
import rollbackIcon from "../../assets/icons/rollback.svg";
import sinoIcon from "../../assets/icons/sino.svg";
import userIcon from "../../assets/icons/user.svg";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarContainer,
  Highlight,
  IconContainer,
  HighlightBar,
} from "./styles";

interface ImageData {
  id: number;
  icon: string;
  route: string;
}

const Sidebar = () => {
  const location = useLocation();

  const images: ImageData[] = [
    { id: 1, icon: homeIcon, route: "/em-breve-1" },
    { id: 2, icon: editIcon, route: "/" },
    { id: 3, icon: connectionsIcon, route: "/em-breve-2" },
    { id: 4, icon: rollbackIcon, route: "/em-breve-3" },
    { id: 5, icon: sinoIcon, route: "/em-breve-4" },
    { id: 6, icon: userIcon, route: "/em-breve-5" },
  ];

  return (
    <SidebarContainer>
      <Highlight />

      {images.map((image, index) => (
        <IconContainer key={image.id} index={index}>
          {location.pathname === image.route && <HighlightBar />}
          <Link to={image.route}>
            <img src={image.icon} alt={`Icon ${index}`} />
          </Link>
        </IconContainer>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
