import React from 'react';
import style from './Prices.module.scss';


const Prices = () => {
  return (
    <section id="prices">
        <h3 className={style.title}>PRICES & AVAILABILITY</h3>
        <div className={style.aboutContainer}>
        <p className={style.centerP}>
            The cost and timeline for each project depend on how much work is involved from the start.  <br/>
            Don’t hesitate to get in touch if you’d like more details.
        </p>
        </div>

    </section>
  );
};

export default Prices;