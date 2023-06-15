import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact__title}>
                <h1>Doing interesting work?
                <br/><span className={styles.contact__title_chat}>Let's chat </span></h1> 
            </div>
            <form className={styles.contact__form}>
                <input type="text" placeholder='Name' className={styles.contact__form_element} required>
                </input>
                <input type="text" placeholder='Email' className={styles.contact__form_element} required>
                </input>
                <textarea className={styles.contact__form_element} required></textarea>
                <button type="submit" className={styles.contact__form_button} rows="5">Submit</button>
            </form>
        </section>
    )
}

export default Contact;