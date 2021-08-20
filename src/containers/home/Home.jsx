import React from 'react';
import Intro from '../../components/intro/Intro';
import Languages from '../../components/languages/Languages';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';

const Home = () => {
    return (
        <>
            <Intro />
            <Projects />
            <Languages />
            <Contact />
        </>
    )
}

export default Home
