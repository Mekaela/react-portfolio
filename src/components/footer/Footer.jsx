import React from "react";
import styles from "./Footer.module.scss";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/mekaela-stevenson-b215b954/">
        <FontAwesomeIcon
          className={styles.footer__icon}
          icon={faLinkedinIn}
          size="2x"
        />
      </a>
      <a href="https://github.com/Mekaela">
        <FontAwesomeIcon
          className={styles.footer__icon}
          icon={faGithub}
          size="2x"
        />
      </a>
      <p className={styles.footer__copyright}>
        &#169; {currentYear} Mekaela Stevenson
      </p>
    </div>
  );
};

export default Footer;
