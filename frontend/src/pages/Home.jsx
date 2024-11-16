import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AppInfo from '../components/AppInfo';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className='px-12 mt-6'>
        <Navbar />
        <Hero />
        <AppInfo />
        <Footer />
      </div>
    </>
  );
};

export default Home;
