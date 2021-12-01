import React, { useState } from 'react';
import '../FrontPage/FrontPage.css';
// import logo from '../../../Coventic Webpage images/mylogo.png';
import ficon from '../../../Coventic Webpage images/fb.png';
import linkicon from '../../../Coventic Webpage images/linkedin.png';
import giticon from '../../../Coventic Webpage images/github.png';
import bubble from '../../../Coventic Webpage images/bubble.png';
import resume from '../../../files/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faDownload } from '@fortawesome/free-solid-svg-icons';

const FrontPage = () => {
    const [download, setDownload] = useState(false);
    const handleDownload = () => {
        setDownload(true);
    };



    return (
        <div className='displayStyle'>
            {/* <div className='navbar'>
                <img className='logo' src={logo} alt="logo" />
                <button type='button'>Contract <FontAwesomeIcon icon={faUserTie} /></button>
            </div> */}

            <div style={{ marginTop: '40vh' }} className='content'>
                <h4><span style={{ color: '#2ecc71' }}>HEY !</span> Its Me NURUL HUDA...</h4>
                <h1>FRONT-END WEB <span style={{ color: '#2ecc71' }}>DEVELOPER</span></h1>
                {download ? <p>Downloaded Resume <FontAwesomeIcon style={{ color: 'green' }} icon={faCheckCircle} /></p> : <a className='downloadbtn' onClick={handleDownload} href={resume} download>Resume Download <FontAwesomeIcon icon={faDownload} /></a>}
            </div>

            <div className="side-icon">
                <div className='social-icons'>
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://www.facebook.com/showrov0010/"><img src={ficon} alt="" /></a>
                    <br />
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/md-nurul-huda-58b605195/"><img src={linkicon} alt="" /></a>
                    <br />
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://github.com/nurul0010"><img src={giticon} alt="" /></a>
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