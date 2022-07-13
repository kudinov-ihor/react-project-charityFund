import React from 'react';
import AboutPage from '../../components/about/AboutPage';
import Donate from '../../components/donate/Donate';
import {Helmet} from 'react-helmet';
function About() {
  return (
    <>
      <Helmet>
          <title>Християнський Благодійний Фонд «ДОБРОТВОР» : Про фонд</title>
          <meta name="description" content="Фонд створено з благословення єпископа Тернопільського УАПЦ Тихона (Петранюка). Мета діяльності Фонду є здійснення благодійної діяльності інтересах громадян України." />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dobrotvor.com.ua/about" />
          <meta property="og:title" content="Християнський Благодійний Фонд «ДОБРОТВОР» : Про фонд" />
          <meta property="og:description" content="Фонд створено з благословення єпископа Тернопільського УАПЦ Тихона (Петранюка). Основна мета діяльності Фонду є здійснення благодійної діяльності інтересах громадян України, розвитку релігійних громад на території України, надання матеріальної, фінансової та організаційної допомоги православним релігійним організаціям." />
          <meta property="og:image" content="https://ic.pics.livejournal.com/i_krymska/33301154/44182/44182_1000.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dobrotvor.com.ua/about" />
          <meta property="twitter:title" content="Християнський Благодійний Фонд «ДОБРОТВОР» : Про фонд" />
          <meta property="twitter:description" content="Фонд створено з благословення єпископа Тернопільського УАПЦ Тихона (Петранюка). Основна мета діяльності Фонду є здійснення благодійної діяльності інтересах громадян України, розвитку релігійних громад на території України, надання матеріальної, фінансової та організаційної допомоги православним релігійним організаціям." />
          <meta property="twitter:image" content="https://ic.pics.livejournal.com/i_krymska/33301154/44182/44182_1000.jpg" />

          <link rel="canonical" href="/about"></link>
      </Helmet>
      <AboutPage/>
      <Donate/>
    </>
  )
}

export default About