import React from 'react';
import './desrChurch.scss';

import { useTranslation } from 'react-i18next';


function DescrProjectCastle() {

  const {t} = useTranslation(["common", "projects"]);

  return (
    <section class="church-content">
        <div class="container">
            <p class="church-content-text">
              {t("projects:projectCastle.projectText1")}
            </p>
            <p class="church-content-text">
              {t("projects:projectCastle.projectText2")}
            </p>
            <p class="church-content-text">
              {t("projects:projectCastle.projectText3")}
            </p>
            <p class="church-content-text">
              {t("projects:projectCastle.projectText4")}
            </p>
            <p class="church-content-text">
              {t("projects:projectCastle.projectText5")}
            </p>
            <p class="church-content-text">
              {t("projects:projectCastle.projectText6")}
            </p>
            <p class="church-content-text">
              {t("projects:projectCastle.projectText7")}
            </p>
            <p class="church-content-text">
              {t("projects:projectCastle.projectText8")}
            </p>
            <p class="church-content-text">
              {t("projects:projectCastle.projectText9")}
            </p>
            <div class="sketchfab-embed-wrapper"> <iframe title="Chervonogorodsky castle_Червоногородський замок" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/28aae75a6a9545a18555cb5c40245df7/embed"> </iframe></div>
        </div>
    </section>
  )
}

export default DescrProjectCastle