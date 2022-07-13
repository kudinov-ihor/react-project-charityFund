import React from 'react';
import './desrChurch.scss';

import i18next from 'i18next';


function DescrProjectChurch(props) {
    
    const text = i18next.t('projects:' + props.name + '', { returnObjects: true});;

    const projectDescr = text.map((text) =>
        <p class="church-content-text">
            {text}
        </p>
    );

  return (
    <section class="church-content">
        <div class="container">
            {projectDescr}
        </div>
    </section>
  )
}

export default DescrProjectChurch