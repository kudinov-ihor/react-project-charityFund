import React from 'react';
import './about.scss';
import {Link} from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import i18next from 'i18next';

function AboutCards() {

  const { t} = useTranslation(["about", "common"]);

  const cards =  i18next.t('about:aboutCardsTitle', { returnObjects: true}).map((card) => 
    <div className="about-cards-item" key={card.id}>
      <h3 className="about-cards-item-title">
        {card.title}
      </h3>
      <p className="about-cards-item-descr">
        {card.descr}
      </p>
      <Link to={card.link} className="about-cards-item-link">
        <button className="about-cards-item-button">
              {t("common:moreBtn")}
        </button>
      </Link>
    </div> 
  );
  
  return (
    <div className="about-cards">
      {cards}
    </div>
  )
}

export default AboutCards