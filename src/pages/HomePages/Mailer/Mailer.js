import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Mailer = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_afm1wan', 'template_ezqf7ru', e.target, "user_Q1da4iUK4bwMzqGeso45R")
            .then(res => setSuccess(res.text))
            .catch(err => setError(err.message))
    }

    return (
        <div style={{ width: '100%', height: 'auto', backgroundColor: '#34495e', paddingTop: '40px', paddingBottom: '40px' }}>
            <div className='container border' style={{ maxWidth: '50%', backgroundImage: `url('https://www.creativefabrica.com/wp-content/uploads/2021/01/28/Colorful-Watercolor-Background-Graphics-8158369-1.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

                <h2 style={{ marginTop: '25px' }}>Contract Form</h2>


                {success ? <p>Successfully sent email <FontAwesomeIcon style={{ color: 'green' }} icon={faCheckCircle} /></p> : <form onSubmit={sendEmail} className="row" style={{ margin: '25px 10px 75px 10px' }}>
                    <label>Name</label>
                    <input required type='text' name='name' className='form-control' />


                    <label>Your Email</label>
                    <input required type='email' name='user_email' className='form-control' />


                    <label>Message</label>
                    <textarea required name='message' rows='4' className='form-control' />

                    <input style={{ marginTop: '30px' }} type="submit" value='Send' className='form-control btn btn-primary' />
                </form>}
                {error && <p style={{ color: 'red' }}>{error?.message}</p>}
            </div>
        </div>
    );
};

export default Mailer;