import React from 'react';
import PromoPage from '../../components/promo/PromoPage';
import DescrProject from '../../components/descr/DescrProject';
import Donate from '../../components/donate/Donate';
import GalleryChurch from '../../components/gallery/GalleryChurch';
import { useTranslation } from 'react-i18next';
import promoChurch from '../../assets/img/project_church/project_church_promo.webp';
import {Helmet} from 'react-helmet';
function ProjectChurch() {

  const {t} = useTranslation(["common"]);

  return (
      <>
        <Helmet>
          <title>Християнський Благодійний Фонд «ДОБРОТВОР» : Церква Різдва Христового в Тернополі</title>
          <meta name="description" content="Церква Різдва Христового в Тернополі — одна з найдавніших культових споруд Тернополя. Кам'яну споруду будували від липня 1602 до вересня 1608 року." />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dobrotvor.com.ua/project/project-church" />
          <meta property="og:title" content="Християнський Благодійний Фонд «ДОБРОТВОР» : Церква Різдва Христового в Тернополі" />
          <meta property="og:description" content="Церква Різдва Христового в Тернополі — одна з найдавніших культових споруд Тернополя, пам’ятка архітектури національного значення в Україні, кафедральний храм Тернопільсько-Бучацької єпархії Православної Церкви України. Кам'яну споруду будували від липня 1602 до вересня 1608 року." />
          <meta property="og:image" content="https://ic.pics.livejournal.com/i_krymska/33301154/44182/44182_1000.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dobrotvor.com.ua/project/project-church" />
          <meta property="twitter:title" content="Християнський Благодійний Фонд «ДОБРОТВОР» : Церква Різдва Христового в Тернополі" />
          <meta property="twitter:description" content="Церква Різдва Христового в Тернополі — одна з найдавніших культових споруд Тернополя, пам’ятка архітектури національного значення в Україні, кафедральний храм Тернопільсько-Бучацької єпархії Православної Церкви України. Кам'яну споруду будували від липня 1602 до вересня 1608 року." />
          <meta property="twitter:image" content="https://ic.pics.livejournal.com/i_krymska/33301154/44182/44182_1000.jpg" />
          <link rel="canonical" href="/project/project-church" />
        </Helmet>
        <PromoPage title={t("projectChurch")} src={promoChurch}/>
        <DescrProject name="projectChurch"/>
        <Donate/>
        <GalleryChurch/>
      </>

  )
}

export default ProjectChurch