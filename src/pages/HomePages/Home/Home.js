import React from 'react';
import About from '../About/About';
import FrontPage from '../FrontPage/FrontPage';
import Mailer from '../Mailer/Mailer';
import Projects from '../ProjectsSection/Projects/Projects';

const Home = () => {
    return (
        <div>
            <FrontPage></FrontPage>
            <About></About>
            <Projects></Projects>
            <Mailer></Mailer>
        </div>
    );
};

export default Home;