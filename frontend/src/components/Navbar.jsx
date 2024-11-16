import React from 'react'
import { Link } from "react-router-dom"
import Button from '../ui/Button'

const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-3xl text-blue-500 font-bold'>dot-next</h1>
            </div>
            <div className='flex items-center gap-8'>
                <h2 className='font-medium hover:underline'><Link to='/services'>Services</Link></h2>
                <h2 className='font-medium hover:underline'><Link to='/about'>About</Link></h2>
                <Button><Link to='contact-us'>Contact us</Link></Button>
            </div>
        </div>
    </>
  )
}

export default Navbar;
