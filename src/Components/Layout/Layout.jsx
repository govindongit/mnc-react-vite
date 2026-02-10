import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTopOnRouteChange from './ScrollToTopOnRouteChange';

function Layout(props) {
  return (
    <>
        <Header/>
        <ScrollToTopOnRouteChange/>
        <main>{props.children}</main>
        <Footer/>
    </>
  );
}

export default Layout;
