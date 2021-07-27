import React, { useState } from 'react';
import "./navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>
      <Navbar className="color-nav" light expand="md">
        <NavbarBrand id="logo" href="/">Joshua Brooks <i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-js-square"></i> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/"><span className="linkstyling">About Me</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact"><span className="linkstyling">Contact</span></NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="two-toned-header-color"></div>
    </div>
    
  );
}

export default MyNavbar;
