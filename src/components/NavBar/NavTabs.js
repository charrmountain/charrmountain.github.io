import * as React from "react";
import "./style.css";
import { Menu, Image } from "semantic-ui-react";
import logo from "../Container/images/CM_logo_white.png";
import jQuery from "jquery";

function NavTabs({ currentPage, handlePageChange }) {
  const pageNames = ["home", "about", "skills", "portfolio", "contact"];

  // This function returns jsx for a nav-item for a given page.
  const renderNavTab = (page) => {
    const href = `#${page.toLowerCase()}`;
    const className = currentPage === page ? "active" : "muted";
    const onClick = () => handlePageChange(page);

    jQuery.fn.isInViewport = function () {
        let elementTop = jQuery(this).offset().top;
        let elementBottom = elementTop + jQuery(this).outerHeight();

        let viewportTop = jQuery(window).scrollTop();
        let viewportBottom = viewportTop + jQuery(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    pageNames.forEach(page => {
      var location = '#' + page;
      switch (page) {
        case 'portfolio':
          location = location + ' .projects_grid';
          break;
        case 'skills':
          location = location + ' .projects';
          break;
        case 'about':
          location = '#profile';
          break;
        default:
          break;
      }
      jQuery(window).scroll(function () {
          if (jQuery(location).isInViewport()) {
              //  Use #contact instead of this
              jQuery('.menu .item').removeClass('active');
              jQuery('.menu .'+ page ).addClass('active');
          } else {
              //  Remove class
              jQuery('.menu .'+ page ).removeClass('active');
          }
      });
    });
    return (
      <Menu.Item key={page} href={href} onClick={onClick} className={[className ,page]}>
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
