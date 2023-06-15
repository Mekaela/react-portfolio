import React from 'react'
import styles from './Projects.module.scss';
import inventory from '../../images/inventory.png';
import farm from '../../images/farm.png';
import salesforce from '../../images/salesforce.png';

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1 className={styles.projects__title}>Experience <br/> &amp; Projects:</h1>
            <div className={styles.projects__card}>
                <a href="https://www.lendi.com">
                    <img className={styles.projects__img} src={salesforce} alt="Sample Salesforce UI " />
                </a>
                <h2 className={styles.projects__text}>Lendi</h2>
                <h3 className={styles.projects__text}>Legacy and Greenfield Salesforce instances</h3>
                <p className={styles.projects__text}>I worked as a Salesforce Developer with Lendi for 18 months. The technologies I used were: LWC - Javascript, APEX, Visualforce, Triggers, Configuration; Kafka: JSON. I was using git daily and worked in an agile team.</p>
            </div>
            <div className={styles.projects__card}>
                {/* <a href="https://www.mothdx.com"> */}
                    <img className={styles.projects__img} src={inventory} alt="UI for a chemical inventory system. Has 6 columns of name, id etc. " />
                {/* </a> */}
                <h2 className={styles.projects__text}>Moth Diagnostics</h2>
                <h3 className={styles.projects__text}>Chemical inventory software</h3>
                <p className={styles.projects__text}>A joint project with a team of 12 trainee developers to build a chemical inventory system in Java and React. My role was mainly building containers and components in React, as well as troubleshooting and joining tables in Java, including Spring Boot. I also used MySQL for the database.</p>
            </div>
            <div className={styles.projects__card}>
                <a href="https://github.com/Mekaela/ecommerce-farm">
                    <img className={styles.projects__img} src={farm} alt="app UI" />
                </a>
                <h2 className={styles.projects__text}>Farm website</h2>
                <h3 className={styles.projects__text}>Farm eCommerce website</h3>
                <p className={styles.projects__text}>This site was built in React and used Firebase for the database. It allows customers to browse options and add them to their cart.</p>
            </div>
        </div>
    )
}
export default Projects;