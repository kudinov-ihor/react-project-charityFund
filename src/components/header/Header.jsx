import './header.scss';
import React, { useState, useEffect } from 'react';
import  Logo  from '../../assets/icons/Frame.svg';
import {Link, NavLink} from 'react-router-dom';
import i18next from 'i18next';

import { useTranslation } from 'react-i18next';

function Header() {
    
    const [menu, setMenu] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState(false);

    
    const {i18n, t} = useTranslation(["header", "common"]);

    useEffect (() => {
        if (localStorage.getItem("i18nextLng").length > 2) {
            i18next.changeLanguage("ua");
        }
    }, []);

    const handleLanguageChange = () => {
        if (localStorage.getItem("i18nextLng") === 'ua') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('ua');
        }


        
    }

    const mobileSubMenuLinks = i18next.t('header:submenu', {returnObjects: true}).map((link) => 
        <li className="menu-list-submenu-item" key={link.id} onClick={() => setMenu(!menu)}> 
            <Link to={link.link}>
                {link.name} 
            </Link>
        </li>
    );
    const mobileMenu = i18next.t('header:navigation', {returnObjects: true}).map((link) => {
        if (link.id === 3) {
            return (
                <li className="menu-link" onClick={() => setMobileSubMenu(!mobileSubMenu)}>
                        {link.name}
                        <i className={mobileSubMenu ? "uil uil-arrow-down icon-mobile active" : "uil uil-arrow-down icon-mobile"}></i>
                    <ul className={mobileSubMenu ? "menu-list-submenu active" : "menu-list-submenu"}>
                        {mobileSubMenuLinks}
                    </ul>
                </li>
            )
        } else {
            return (
                <li className="menu-link" key={link.id}><Link to={link.link} onClick={() => setMenu(!menu)}>{link.name}</Link></li>
            )
        }
    });
    const desctSubMenu = i18next.t('header:submenu', {returnObjects: true}).map((link) => 
        <li className="nav-list-submenu-item" key={link.id}> 
            <Link to={link.link}>
                {link.name}
            </Link> 
        </li>
    );
    const desctMenu = i18next.t('header:navigation', {returnObjects: true}).map((link) => {
        if (link.id === 3) {
            return (
                <li className="nav-list-item nav-list-item-link">
                        {link.name}
                        <i className="uil uil-arrow-down"></i>
                    <ul className="nav-list-submenu">
                        {desctSubMenu}
                    </ul>
                </li>
            ) 
        } else {
            return (
                <li className="nav-list-item" key={link.id}><NavLink className={({isActive}) => (isActive ? "nav-list-item-link active" : "nav-list-item-link")} to={link.link}> {link.name} </NavLink></li>
            )
        }
    });


  return (
        
    <>
            <div className={menu ? 'menu active' : 'menu'}>
                <div className="menu-block">
                    <nav>
                        <ul className="menu-list">
                            {mobileMenu}
                        </ul>
                    </nav>
                    <a href="https://secure.wayforpay.com/payment/sace4d41e8f49" className="menu-donate">
                        <button className="menu-donate-button">
                            {t("common:mainBtn")}
                        </button>
                    </a>
 



                </div>
            </div>
            <header className="header">
                <div className="header-info">
                    <div className="container">
                        <div className="header-info-wrapper">
                            <div className="header-info-wrapper-logo">
                                {/* <a href="index.html">
                                    <img src={Logo} alt="logo" />
                                </a> */}
                                <Link to="/">
                                    <span className="company-name">Добротвор</span>
                                </Link>
                            </div>
                            <div className='header-info-wrapper-items'>
                            <div className="header-info-wrapper-mail">
                                <i className="uil uil-envelope icon-mail"></i>
                                <div className="header-info-wrapper-mail-descr">
                                    <span className="mail-info">{t('header:header.mailUs')}</span>
                                    <a className="mail-link" href="mailto:dobrotvor2018@gmail.com">dobrotvor2018@gmail.com</a>
                                </div>
                            </div>

                            <div className="header-info-wrapper-phone">
                                <i className="uil uil-phone icon-phone"></i>
                                <div className="header-info-wrapper-phone-descr">
                                    <span className="phone-info">{t('header:header.callUs')}</span>
                                    <a className="phone-link" href="tel:+380678643934">+380678643934</a>
                                </div>
                            </div>
                            </div>
                            <div className="mobile-layout">
                                <button className='lang-btn mobile' onClick={handleLanguageChange}>
                                    {localStorage.getItem("i18nextLng") === 'ua' ? 'УКР' : 'ENG'}
                                </button>
                                <div className={menu ? 'header-info-wrapper-hamburger active' : 'header-info-wrapper-hamburger'} onClick={() => setMenu(!menu)}>
                                    <span ></span>
                                    <span ></span>
                                    <span ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="nav">
                    <div className="container">
                        <div className="nav-wrapper">

                                <ul className="nav-list">
                                    {desctMenu}

                                </ul>


                                <div className="nav-wrapper-items">
                                    <button className='lang-btn' onClick={handleLanguageChange}>
                                        {localStorage.getItem("i18nextLng") === 'ua' ? 'УКР' : 'ENG'}
                                    </button>
                                    <a href='https://secure.wayforpay.com/payment/sace4d41e8f49' target='_blank' rel="noreferrer">
                                        <button class="button-78">
                                            {t("common:mainBtn")}
                                        </button>
                                    </a>


                                </div>


                        </div>
                    </div>
                </nav>
            </header>
    </>
  )
}

export default Header;