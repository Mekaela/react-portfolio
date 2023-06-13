import React from 'react';
import styles from './Languages.module.scss';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faJava, faGitAlt, faGripfire, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Languages = () => {

    const languageList = [
        {
            "name": "Apex",
            "img": faReact,
            "description": "Used while working at Lendi as a Salesforce Software Engineer. About 90% of my coding was using Apex",
        },
        {
            "name": "Java and Spring",
            "img": faJava,
            "description": "Main language and framework I used during Nology software engineering course for learning and projects.",
        },
        {
            "name": "Javascript",
            "img": faJs,
            "description": "Used for LWCs as a Salesforce Software Engineer at Lendi, as well as during the Nology course, and projects, like this portfolio.",
        },
        {
            "name": "React",
            "img": faReact,
            "description": "Used for this portfolio, and projects and learning during Nology Software Engineering course.",
        },
        {
            "name": "Python",
            "img": faPython,
            "description": "Used for many online courses including Machine Learning with Python and many other online courses.",
        },
        {
            "name": "Firebase",
            "img": faGripfire,
            "description": "Used during one of my projects during nology software engineering course.",
        },
        {
            "name": "MySQL",
            "img": faCode,
            "description": "Used during the portfolio project with nology, and for a personal project.",
        },
        {
            "name": "Git",
            "img": faGitAlt,
            "description": "Used daily at Lendi, and for personal projects.",
        },
        {
            "name": "and...",
            "description": "I have also touched on Sass and Bootstrap while building websites, and R during online courses.",
        },
    ]

    return (
        <div className={styles.languages}>
            <h1 className={styles.languages__title}>Skills:</h1>
            <div className={styles.languages__list}>
            {languageList.map((language) => (
                <div key={language.name} className={styles.languages__list__item}>
                    <FontAwesomeIcon icon={language.img} size="2x"/>
                    <div><p className={styles.languages__list__item_name}>{language.name}</p>
                    <p className={styles.languages__list__item_desc}>{language.description}</p></div>
                </div>
                ))}
                </div>
        </div>
    )
}
export default Languages;