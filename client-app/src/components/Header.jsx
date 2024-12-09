import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { motion } from 'framer-motion'; // Framer Motion import ediliyor

function Header() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }} // Başlangıçta yukarıda ve opak olmayan
      animate={{ y: 0, opacity: 1 }} // Tamamen görünür ve kayarak aşağı gelir
      transition={{ duration: 0.5 }}
    >
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Delta-V</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/getallproduct">GetAllProduct</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/getfirstproduct">GetFirstProduct</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/middleproduct">MiddleProduct</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lastproduct">LastProduct</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/regularproduct">RegularProduct</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </motion.div>
  );
}

export default Header;
