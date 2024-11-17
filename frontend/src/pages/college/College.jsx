import React from 'react'
import { Link } from "react-router-dom";
import Button from '../../ui/Button';

const College = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-gray-50 border rounded-lg">
        <div className="p-6">
          <div className="flex flex-col space-y-4">
            <Button variant='red'>
              <Link to='/registar'>Registar</Link>
            </Button>
            <Button variant='green'>
              <Link to='/hod'>HOD</Link>
            </Button>
            <Button>
              <Link to='/faculty'>Faculty</Link>
            </Button>
            <Button variant='black'>
              <Link to='/admin'>Admin</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default College;
