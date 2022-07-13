import React, {useRef, useEffect} from 'react';
import './promo.scss';

import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {gsap} from 'gsap';
import ReactGA from 'react-ga';
function Promo(props) {


  const {t} = useTranslation(["common"]);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.promo'), 
      {opacity: "0"}, 
      {opacity: "1", duration: 1.3, delay: .3}
      );
  }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.promo-wrapper'),
      {scale: 0},
      {scale: 1, duration: 1.2 ,delay: .8}
    );
  }, []);

  return (
    <div ref={ref}>
    <section className='promo' style={{background: "url(" + props.photo + ") center center / cover no-repeat"}}  >
      <div className="container">
        <div className="promo-wrapper">
          <h1 className='promo-title'>{t("foundationName")}</h1>
            <a href="#about">
              <button class="button-52" role="button">
                {t('aboutBtn')}
              </button>
            </a>
        </div>
      </div>
    </section>
    </div>

  )
}

export default Promo