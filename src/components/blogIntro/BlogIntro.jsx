import React from 'react';
import styles from "./BlogIntro.module.scss";

const BlogIntro = () => {
    return (
        <div className={styles.blog}>
            <h2 className={styles.blog__title}>Data Science Blog</h2>
            <h5 className={styles.blog__subtitle}>Mekaela Stevenson</h5>
            <p className={styles.blog__intro}>Welcome to my blog. This blog is both for me to solidify my learnings and to look at some data science learnings in an analytical way. 
            </p>
        </div>
    );
}

export default BlogIntro;
