import React, { useState } from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink, useHistory } from "react-router-dom";
import styles from './NavBarMainPage.module.css';


const NavBarMainPage = (props) => {
  
  return (
    <div>
      <Nav tabs className={styles.NavBar}>
        <NavItem>
            <NavLink className="nav-link" to="/categories"> Categories </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="nav-link" to="/search">Search</NavLink>
        </NavItem>
        
      </Nav>
    </div>
  );
}

export default NavBarMainPage;