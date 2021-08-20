import React from 'react';
import styles from './Languages.module.scss';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faJs, faReact, faJava, faSass, faCss3, faHtml5, faGitAlt, faEnvira, faGripfire, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Languages = () => {

    const languageList = [
        {
            "name": "Java",
            "img": faJava,
        },
        {
            "name": "React",
            "img": faReact,
        },
        {
            "name": "Spring Framework",
            "img": faEnvira,
        },
        {
            "name": "Javascript",
            "img": faJs,
        },
        {
            "name": "Firebase",
            "img": faGripfire,
        },
        {
            "name": "MySQL",
            "img": faCode,
        },
        {
            "name": "SASS",
            "img": faSass
        },
        {
            "name": "CSS",
            "img": faCss3
        },
        {
            "name": "HTML5",
            "img": faHtml5
        },
        {
            "name": "Git",
            "img": faGitAlt
        },
        {
            "name": "Python",
            "img": faPython
        },
    ]

    return (
        <div className={styles.languages}>
            <h1 className={styles.languages__title}>Skills:</h1>
            <div className={styles.languages__list}>
            {languageList.map((language) => (
                <div key={language.name}>
                    <FontAwesomeIcon icon={language.img} size="3x"/>
                    <h3>{language.name}</h3>
                </div>
                ))}
                </div>
        </div>
    )
}
export default Languages;