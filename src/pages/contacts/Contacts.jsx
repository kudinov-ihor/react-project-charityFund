import React from 'react';
import Donate from '../../components/donate/Donate';
import Contact from '../../components/contact/Contact';
import {Helmet} from 'react-helmet';

function Contacts() {
  return (
    <>  
        <Helmet>
          <title>Християнський Благодійний Фонд «ДОБРОТВОР» : Контакти</title>
          
          <meta name="description" content="Фонд створено з благословення єпископа Тернопільського УАПЦ Тихона (Петранюка). Мета діяльності Фонду є здійснення благодійної діяльності інтересах громадян України." />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dobrotvor.com.ua/contacts" />
          <meta property="og:title" content="Християнський Благодійний Фонд «ДОБРОТВОР» : Контакти" />
          <meta property="og:description" content="Фонд створено з благословення єпископа Тернопільського УАПЦ Тихона (Петранюка). Основна мета діяльності Фонду є здійснення благодійної діяльності інтересах громадян України, розвитку релігійних громад на території України, надання матеріальної, фінансової та організаційної допомоги православним релігійним організаціям." />
          <meta property="og:image" content="https://ic.pics.livejournal.com/i_krymska/33301154/44182/44182_1000.jpg" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dobrotvor.com.ua/contacts" />
          <meta property="twitter:title" content="Християнський Благодійний Фонд «ДОБРОТВОР» : Контакти" />
          <meta property="twitter:description" content="Фонд створено з благословення єпископа Тернопільського УАПЦ Тихона (Петранюка). Основна мета діяльності Фонду є здійснення благодійної діяльності інтересах громадян України, розвитку релігійних громад на території України, надання матеріальної, фінансової та організаційної допомоги православним релігійним організаціям." />
          <meta property="twitter:image" content="https://ic.pics.livejournal.com/i_krymska/33301154/44182/44182_1000.jpg" />

          <link rel="canonical" href="/contacts" />
        </Helmet>
        <Contact/>
        <Donate/>
    </>
  )
}

export default Contacts