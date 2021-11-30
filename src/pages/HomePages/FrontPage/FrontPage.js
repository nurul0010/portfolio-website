import React, { useState } from 'react';
import '../FrontPage/FrontPage.css';
import logo from '../../../Coventic Webpage images/mylogo.png';
import ficon from '../../../Coventic Webpage images/fb.png';
import igicon from '../../../Coventic Webpage images/ig.png';
import twicon from '../../../Coventic Webpage images/tw.png';
import bubble from '../../../Coventic Webpage images/bubble.png';
import resume from '../../../files/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDownload, faUserTie } from '@fortawesome/free-solid-svg-icons';

const FrontPage = () => {
    const [download, setDownload] = useState(false);
    const handleDownload = () => {
        setDownload(true);
    };



    return (
        <div className='displayStyle'>
            <div className='navbar'>
                <img className='logo' src={logo} alt="logo" />
                <button type='button'>Contract <FontAwesomeIcon icon={faUserTie} /></button>
            </div>
            <div className='content'>
                <h4><span style={{ color: '#2ecc71' }}>HEY !</span> Its Me NURUL HUDA...</h4>
                <h1>FRONT-END WEB <span style={{ color: '#2ecc71' }}>DEVELOPER</span></h1>
                {download ? <p>Downloaded <FontAwesomeIcon style={{ color: 'green' }} icon={faCheckCircle} /></p> : <a onClick={handleDownload} href={resume} download>Resume Download <FontAwesomeIcon icon={faDownload} /></a>}
            </div>
            <div className="side-icon">
                <div className='social-icons'>
                    <img src={ficon} alt="" />
                    <br />
                    <img src={igicon} alt="" />
                    <br />
                    <img src={twicon} alt="" />
                </div>
            </div>


            {/* bubble and animation part  */}

            <div className='bubbles'>
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />
                <img src={bubble} alt="" />

            </div>
        </div>
    );
};

export default FrontPage;