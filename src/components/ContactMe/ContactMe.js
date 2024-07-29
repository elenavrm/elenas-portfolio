import React from 'react';
import blue3 from '../../assets/images/blue3.png';
import ContactForm from './ContactForm';
import style from './ContactMe.module.scss';

const ContactMe = () => {
    return (
        <section id="contacts">

                <h3 className={style.title}>CONTACT ME</h3>
                <p className={style.centerP}>
                    Let's get in touch. Fill in this form below.
                </p>

            <div className={style.textMe}>
                <ContactForm />
                <div className={style.picDiv}>
                    <img 
                    className={style.emailPic} 
                    src={blue3} 
                    alt="email img" />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;