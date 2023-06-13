import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <section className={styles.contact}>
            <h1 className={styles.contact__title}>Doing interesting work! 
            <br/>Let's <a href="mailto:mekaelas@hotmail.com?" className={styles.contact__title_chat}>chat</a></h1> 
        </section>
    )
}

export default Contact;