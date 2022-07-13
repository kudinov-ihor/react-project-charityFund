import React from 'react';
import './about.scss';
import AboutCards from './AboutCards';
import AboutPhoto from '../../assets/img/about_photo.webp';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function About() {


    const {t} = useTranslation(["about", "common"]);
    const content = i18next.t('about:aboutContent', { returnObjects: true}).slice(0, 2).map((item) => 
        <p class="about-info-descr" key={item.id}>
            {item.content}
        </p>
    );

  return (
    <section class="about" id='about'>
    <div class="container">
        <div class="about-wrapper">
            <img src={AboutPhoto}
                 alt="Example" 
                 class="about-photo" 
                 />
            <div class="about-info">
                <h2 class="about-info-heading">
                    {t("about:title")}
                </h2>
                <h2 class="about-info-title">
                    {t("about:autograph")}
                </h2>

                {content}

                <a href="about.html" class="about-info-link">
                    <button class="about-info-link-button">
                        {t("common:moreBtn")}
                    </button>
                </a>

            </div>
        </div>
        <AboutCards/>

    </div>
</section>
  )
}

export default About