import React from 'react';
import styles from './Intro.module.scss';

const Intro = () => {
    return (
        <div className={styles.header}>
            <header >
                <h1 className={styles.header__h1}>Welcome. <br />I am <span className={styles.header__color}>Mekaela</span>
                </h1>
                <div className={styles.header__list}>
                        <p className={styles.header__list}>Software Engineer</p>
                        <p className={styles.header__list}>Scrum certified PSPO I</p>
                </div>
            </header>
        </div>
    )
}

export default Intro;