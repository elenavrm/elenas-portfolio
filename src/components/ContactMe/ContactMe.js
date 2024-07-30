import React, { useRef } from 'react';
import blue3 from '../../assets/images/blue3.png';
import ContactForm from './ContactForm';
import style from './ContactMe.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ContactMe = () => {
    const formRef = useRef(null);
    const imgRef = useRef(null);

    const handleFormIntersection = () => {
        formRef.current.classList.add(style.slideInLeft);
    };

    const handleImageIntersection = () => {
        imgRef.current.classList.add(style.slideInRight);
    };

    useIntersectionObserver(formRef, handleFormIntersection, {
        threshold: 0.1, 
    });

    useIntersectionObserver(imgRef, handleImageIntersection, {
        threshold: 0.1, 
    });

    return (
        <section id="contacts">
            <h3 className={style.title}>CONTACT ME</h3>
            <p className={style.centerP}>
                Let's get in touch. Fill in this form below.
            </p>
            <div className={style.textMe}>
                <div 
                ref={formRef} 
                className={style.formContainer}>
                    <ContactForm />
                </div>
                <div 
                ref={imgRef} 
                className={style.picDiv}>
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