import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <nav className={styles.nav}>
        <div className={styles.nav__item}>
          <Link to="/" className={styles.nav__item_link}>
            portfolio
          </Link>
        </div>
        <div className={styles.nav__item}>
          <Link to="/blog" className={styles.nav__item_link}>
            blog
          </Link>
        </div>
        <div className={styles.nav__item}>
          <Link to="/faq" className={styles.nav__item_link}>
            FAQ
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
