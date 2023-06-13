import React from 'react';
import styles from './Intro.module.scss';
import Typewriter from "typewriter-effect";

const Intro = () => {
    return (
        <div className={styles.header}>
            <header >
                <h1 className={styles.header__h1}>
                I am <span className={styles.header__color}>
                <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("A Software Engineer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Analytical")
                                .deleteAll()
                                .typeString("Mekaela")
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                    </span>
                </h1>

                <div className={styles.header__intro_paragraph}>
                    <p>Welcome to my portfolio. </p>
                    <p>Here you'll find some projects I've worked on, some blog posts about my journey to learn about Data Science, and a skills matrix with my technical skills.</p>
                    <p>My skills are a bit different to others. <br/>I'm a generalist with a wide variety of people and IT skills across several industry. </p>
                    <p>My dream is to use my IT skills to help the environment, thus combining my Environmental Science degree and Software Engineering experience.
                    </p>
                </div>
                
            </header>
        </div>
    )
}

export default Intro;