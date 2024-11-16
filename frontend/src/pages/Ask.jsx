import React from 'react'
import Button from '../ui/Button'
import { Link } from "react-router-dom"

const Ask = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='flex flex-col space-y-4 w-48'>
            <Button size='large'><Link to='/college'>College</Link></Button>
            <Button size='large' variant='red'><Link to='/student'>Student</Link></Button>
        </div>
    </div>
  )
}

export default Ask;
