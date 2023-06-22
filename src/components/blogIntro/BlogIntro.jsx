import React from 'react';
import styles from "./BlogIntro.module.scss";

const BlogIntro = () => {
    return (
        <div className={styles.blog}>
            <h1 className={styles.blog__title}>Data Science Blog</h1>
            <h5 className={styles.blog__subtitle}>Mekaela Stevenson</h5>
            <p className={styles.blog__intro}>Welcome to my blog. This blog is both for me to solidify my learnings and to look at some data science techniques and delve into industry trends and new technologies. 
            </p>
        </div>
    );
}

export default BlogIntro;
