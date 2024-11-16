import React from 'react'
import Button from '../ui/Button'

const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between'>
            <div>
                <h1>CMS</h1>
            </div>
            <div className='flex items-center gap-6'>
                <h2>Services</h2>
                <h2>About</h2>
                <Button></Button>
            </div>
        </div>
    </>
  )
}

export default Navbar;
