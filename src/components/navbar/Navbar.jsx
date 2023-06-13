import React from "react";
import styles from './Navbar.module.scss';
import CV from '../../CV.pdf';
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.nav__item}>
          <p>experience</p>
        </div>
        <div className={styles.nav__item}>
          <p>contact</p>
          {/* <Link to="#contact" /> */}
        </div>
        <div className={styles.nav__item}>
          <p>blog</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
