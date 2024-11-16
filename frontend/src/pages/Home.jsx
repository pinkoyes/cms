import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <div className='mx-12 mt-6'>
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
