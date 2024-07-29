import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader'; 
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Portfolio from "../Portfolio/Portfolio";
import Prices from "../Prices/Prices";
import ProjectList from "../Projects/ProjectList";
import MySkills from "../Skills/MySkills";

const MainPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 2000); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader />}
            {!loading && (
                <>
                    <Hero />
                    <Portfolio />
                    <AboutMe />
                    <MySkills />
                    <ProjectList showAll={false} />
                    <Prices />
                    <ContactMe />
                    <Footer />
                </>
    )}
        </>
    );
};

export default MainPage;