import React from 'react'
import Button from '../ui/Button'
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='max-w-full h-screen flex items-center justify-center'>
        <div className='w-1/2 text-center'>
            <h1 className='text-black font-bold text-4xl relative bottom-40'>Streamline Your College Management</h1>
            <p className='text-gray-600 text-lg font-light relative bottom-20'>Join Dotnext to effortlessly manage student attendance, results, fees, and more. Empower your college with our comprehensive management system today.</p>
            <Button><Link to='/'>Get started</Link></Button>
        </div>
    </div>

  )
}

export default Hero;
