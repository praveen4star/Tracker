import React from 'react';
import Navbar from 'component/NavHome';
import Header from 'component/Header';
import About from 'component/About';
import Feature from 'component/Feature';
import Testinomial from 'component/Testinomail';

const Homepage = () => {
    return (
        <>
       <Navbar />
       <Header />
       <About />
       <Feature />
       <Testinomial />
        </>
    )
}

export default Homepage;