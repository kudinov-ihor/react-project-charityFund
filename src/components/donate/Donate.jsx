import React from 'react';
import './donate.scss';
import { useTranslation } from 'react-i18next';
function Donate() {

    const {t} = useTranslation(["common"]);
  return (
    <section class="donate">
        <div class="container">
            <div class="donate-wrapper">
                <h2 class="donate-title">{t("donateDescr")}</h2>
                <a href="https://secure.wayforpay.com/payment/sace4d41e8f49" class="donate-link">
                    <button class="donate-button">
                        {t("mainBtn")}
                    </button>
                </a> 
            </div>
        </div>
    </section>
  )
}

export default Donate