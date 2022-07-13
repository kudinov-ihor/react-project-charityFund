import React from 'react';
import { Routes ,Route } from 'react-router';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import ProjectChurch from '../pages/projects/ProjectChurch';
import ProjectCastle from '../pages/projects/ProjectCastle';
import Contacts from '../pages/contacts/Contacts';
function RouterSiteMap() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/project/project-church' element={<ProjectChurch/>} />
        <Route exact path='/project/project-castle' element={<ProjectCastle/>} />
        <Route exact path='/contacts' element={<Contacts/>} />
    </Routes>
  )
}

export default RouterSiteMap;