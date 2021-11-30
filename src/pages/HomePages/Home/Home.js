import React from 'react';
import About from '../About/About';
import FrontPage from '../FrontPage/FrontPage';
import Mailer from '../Mailer/Mailer';

const Home = () => {
    return (
        <div>
            <FrontPage></FrontPage>
            <About></About>
            <Mailer></Mailer>
        </div>
    );
};

export default Home;