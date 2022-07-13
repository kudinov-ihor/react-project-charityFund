import React, {Suspense , useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import  Header  from './components/header/Header';
import Footer from './components/footer/Footer';
import RouterSiteMap from './components/RouterSiteMap';
import ScrollToTop from './components/ScrollToTop';
import ReactGA from 'react-ga';
import './App.scss';


function App() {

  useEffect(() => {
    ReactGA.initialize('G-L4170RCP0G');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])



  return (
    <div>
      <Suspense fallback={null}>
        <Router>
          <ScrollToTop/>
            <Header />
              <RouterSiteMap/>
            <Footer/>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
