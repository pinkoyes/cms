import React from 'react'
import { Link } from "react-router-dom";
import Button from '../ui/Button';

const College = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold mb-6">College Interface</h1>
        <div className="space-y-2">
          <Button variant="primary" fullWidth>
            Register
          </Button>
          <Button variant="secondary" fullWidth>
            Faculty
          </Button>
          <Button variant="success" fullWidth>
            HOD
          </Button>
        </div>
      </div>
    </div>
  )
}

export default College;
