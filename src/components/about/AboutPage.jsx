import React from 'react';
import './about.scss';
import AboutPhoto from '../../assets/img/about_photo.webp';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function AboutPage() {

    const {t} = useTranslation(["common", "about"]);
    const content = i18next.t('about:aboutContent', { returnObjects: true}).map((item) => 
        <p class="about-info-descr" key={item.id}>
            {item.content}
        </p>
    );
    const paymentMethods = i18next.t('about:paymentMethods', {returnObjects: true}).map((method) => 
        <li class="about-info-list-item">
            {method}
        </li>
    );


  return (
    <section class="about">
    <div class="container">
        <div class="about-wrapper">
            <img src={AboutPhoto} 
                 alt="Photo About Foundation" 
                 class="about-photo about-page-photo" 
                 />
            <div class="about-info">
                <h1 class="about-info-heading">
                    {t("about:title")}
                </h1>
                <h2 class="about-info-title">
                    {t("about:autograph")}
                </h2>

                {content}

                <a href="statut.pdf" target="_blank">
                    <button class="about-info-statut-btn">{t("about:aboutPage.сharter")}</button>
                </a>
                <h3 class="about-info-wallet">{t("about:aboutPage.paymentMethods")}</h3>
                <ul class="about-info-list">
                    {paymentMethods}
                </ul>
                <a href="https://secure.wayforpay.com/payment/sace4d41e8f49" target="_blank">
                    <button class="about-info-donate">{t("common:mainBtn")}</button>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutPage