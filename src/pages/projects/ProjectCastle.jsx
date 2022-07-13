import React from 'react';
import DescrProject from '../../components/descr/DescrProject';
import Donate from '../../components/donate/Donate';
import GalleryCastle from '../../components/gallery/GalleryCastle';
import PromoPage from '../../components/promo/PromoPage';
import { useTranslation } from 'react-i18next';
import promoCastle from '../../assets/img/project_castle/project_castle_promo.webp';
import {Helmet} from 'react-helmet';
import CastleImageModel from '../../components/descr/CastleImageModel';
function ProjectCastle() {
  
  const {t} = useTranslation(["common"]);

  return (
    <>
        <Helmet>
          <title>Християнський Благодійний Фонд «ДОБРОТВОР» : Червоногородський замок</title>
          <meta name="description" content="Червоногородський замок — оборонна споруда біля зниклого колишнього міста Червоногорода. Руїни розташовані в урочищі Червоному, поблизу села Ниркова Заліщицького району Тернопільської області." />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dobrotvor.com.ua/project/project-castle" />
          <meta property="og:title" content="Християнський Благодійний Фонд «ДОБРОТВОР» : Червоногородський замок" />
          <meta property="og:description" content="Червоногородський замок — оборонна споруда біля зниклого колишнього міста Червоногорода, у першій половині XIX ст. перебудована на палац. Руїни розташовані в урочищі Червоному, поблизу села Ниркова Заліщицького району Тернопільської області, на стрімкому пагорбі посеред глибокої котловини річки Джурин, яка в цьому місці утворила майже замкнуту петлю. Тут же знаходиться Червоногородський водоспад - найбільший рівнинний водоспад України." />
          <meta property="og:image" content="https://ic.pics.livejournal.com/i_krymska/33301154/44182/44182_1000.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dobrotvor.com.ua/project/project-castle" />
          <meta property="twitter:title" content="Християнський Благодійний Фонд «ДОБРОТВОР» : Червоногородський замок" />
          <meta property="twitter:description" content="Червоногородський замок — оборонна споруда біля зниклого колишнього міста Червоногорода, у першій половині XIX ст. перебудована на палац. Руїни розташовані в урочищі Червоному, поблизу села Ниркова Заліщицького району Тернопільської області, на стрімкому пагорбі посеред глибокої котловини річки Джурин, яка в цьому місці утворила майже замкнуту петлю. Тут же знаходиться Червоногородський водоспад - найбільший рівнинний водоспад України." />
          <meta property="twitter:image" content="https://ic.pics.livejournal.com/i_krymska/33301154/44182/44182_1000.jpg" />
          <link rel="canonical" href="/project/project-castle"></link>
        </Helmet>
        <PromoPage title={t("projectCastle")} src={promoCastle}/>
        <DescrProject name="projectCastle"/>
        <CastleImageModel />
        <Donate/>
        <GalleryCastle/>
    </>
  )
}

export default ProjectCastle