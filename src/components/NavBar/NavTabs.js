import * as React from "react";
import "./style.css";
import { Menu, Image } from "semantic-ui-react";
import logo from "../Container/images/CM_logo_white.png";

function NavTabs({ currentPage, handlePageChange }) {
  const pageNames = ["HOME", "ABOUT", "SKILLS", "PORTFOLIO", "CONTACT"];

  // This function returns jsx for a nav-item for a given page.
  const renderNavTab = (page) => {
    const href = `#${page.toLowerCase()}`;
    const className = currentPage === page ? "active" : "muted";
    const onClick = () => handlePageChange(page);

    return (
      <Menu.Item key={page} href={href} onClick={onClick} className={className}>
        {page}
      </Menu.Item>
    );
  };

  return (
    <Menu
      size="massive"
      inverted
      pointing
      secondary
      borderless
      horizontal="true"
      className="siteHeader"
    >
      <Image className="logo" src={logo} />
      <div className="menu">{pageNames.map((page) => renderNavTab(page))}</div>
    </Menu>
  );
}

export default NavTabs;
