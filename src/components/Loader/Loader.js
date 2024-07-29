import React, { useState, useEffect } from 'react';
import style from './Loader.module.scss';

const Loader = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true); 
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${style.preloader} 
        ${loaded ? style.loaded : ''}`}>
            <div className={style.preloaderRow}>
                <div className={style.preloaderItem}></div>
                <div className={style.preloaderItem}></div>
            </div>
        </div>
    );
};

export default Loader;