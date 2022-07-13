import React from 'react';
import './promoChurch.scss';



function PromoChurch(props) {



  return (
    <section style={{background: "url(" + props.src + ") center center / cover no-repeat"}} 
             className="church-promo"
             >
        <h1 className="church-promo-title">{props.title}</h1>
    </section>
  )
}

export default PromoChurch