import React from "react";
import styles from "./Navbar.module.scss";
import { Link as ScrollLink} from "react-scroll" ;
import { Link } from "react-router-dom" ;

const Navbar = () => {
  return (
    <section>
      <nav className={styles.nav}>
        <div className={styles.nav__item}>
          <ScrollLink activeClass="active" smooth spy to="contact" className={styles.nav__item_link}>contact</ScrollLink>
        </div>
        <div className={styles.nav__item}>
          <Link to="/blog" className={styles.nav__item_link}>blog</Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
