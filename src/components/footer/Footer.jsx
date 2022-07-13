import React, {useState} from 'react';
import './footer.scss';
import ScrollToTop from 'react-scroll-to-top';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import emailJs from 'emailjs-com';
import ModalWindow from '../modal/ModalWindow';

import { useTranslation } from 'react-i18next';

function Footer() {

    const {i18n, t} = useTranslation(["header", "common", "footer"]);
    const [modal, setModal] = useState(false);



    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_12mv4tj', 'template_bbh80fr', e.target , '1JwcFOexj9V41m0qM')
          .then((result) => {
              setModal(true);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    };


    const footerNavigation = i18next.t('header:navigation', {returnObjects: true}).map((link) => 

        <li class="footer-wrapper-nav-list-item" key={link.id}>
            <Link to={link.link}>
                {link.name}
            </Link>
        </li>

    );

  return (
    <>

        <ModalWindow modal={modal} setModal={setModal}/>

        <ScrollToTop smooth />
        <footer class="footer">
            <div class="container">
                <div class="footer-wrapper">
                    <div class="footer-wrapper-info">
                        <span class="company-name">Добротвор</span>

                        <p class="footer-wrapper-info-descr">{t("footer:footerDescr")}</p>

                    </div>
                    <div class="footer-wrapper-nav">
                        <h3 class="footer-wrapper-nav-title">{t("footer:footerNavTitle")}</h3>
                        <ul class="footer-wrapper-nav-list">
                            {footerNavigation}
                        </ul>
                    </div>
                    <div class="footer-wrapper-form">
                        <h4 class="footer-wrapper-form-title">{t("footer:footerFormTitle")}</h4>
                        <div class="footer-wrapper-form-descr">{t("footer:footerFormDescr")}</div>
                        <form onSubmit={sendEmail}>
                            <input type="email" name='email' placeholder={t("footer:footerFormPlaceholder")} required />
                            <input type="submit" value={t("footer:footerFormBtn")} />
                        </form>
                    </div>
                </div>
                <div class="footer-contact">
                    <h5 class="footer-contact-title">{t("footer:footerContactUs")}</h5>
                    <div class="footer-contact-location">
                        <i class="uil uil-location-point icon"></i>
                        <span>{t("footer:footerContactLocation")}</span>
                    </div>
                    <div class="footer-contact-phone">
                        <i class="uil uil-phone-volume icon"></i>
                        <a  href="tel:+380678643934">+380678643934</a>
                    </div>
                    <div class="footer-contact-mail">
                        <i class="uil uil-envelope icon"></i>
                        <a href="mailto:dobrotvor2018@gmail.com">dobrotvor2018@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer