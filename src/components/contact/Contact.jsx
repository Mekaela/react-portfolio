import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contact__title}>
        <h1>
          Doing interesting work?
          <br />
          <span className={styles.contact__chat}>
            Contact me on{" "}
            <a
              className={styles.contact__chat}
              href="https://www.linkedin.com/in/mekaela-stevenson-b215b954/"
            >
              LinkedIn
            </a>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Contact;
