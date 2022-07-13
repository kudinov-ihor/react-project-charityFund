import React from 'react';
import './contact.scss';

import { useTranslation } from 'react-i18next';

function Contact() {

        
    const {t} = useTranslation(["footer"]);
  return (
    <section class="contacts">
        <div class="container">
            <h1 class="contacts-title">
                {t("footerContactUs")}
            </h1>
            <div class="contacts-wrapper">
                <div class="contacts-wrapper-info">
                    <div class="contacts-location">
                        <i class="uil uil-location-point icon"></i>
                        <span>
                            {t("footerContactLocation")}
                        </span>
                    </div>
                    <div class="contacts-phone">
                        <i class="uil uil-phone-volume icon"></i>
                        <span>+380678643934</span>
                    </div>
                    <div class="contacts-mail">
                        <i class="uil uil-envelope icon"></i>
                        <span>
                            dobrotvor2018@gmail.com</span>
                    </div>

                </div>
                <div class="contacts-wrapper-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.49951390049!2d25.59040021588754!3d49.550597459671074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473036b4763f48db%3A0xef655baeb077796a!2z0KLQtdGA0L3QvtC_0ZbQu9GM0YHRjNC60LAg0ZTQv9Cw0YDRhdGW0Y8g0J_QptCj!5e0!3m2!1sru!2sua!4v1651932730413!5m2!1sru!2sua"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact