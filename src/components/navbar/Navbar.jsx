import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Blog from "../../containers/blog/Blog";

const Navbar = () => {
  return (
    <section>
      <nav className={styles.nav}>
        <div className={styles.nav__item}>
          <p>contact</p>
        </div>
        <div className={styles.nav__item}>
        <Link to="/blog" className={styles.nav__item_link}>blog</Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
