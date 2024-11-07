import React from 'react'
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
  
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div>
                <h1 className='text-4xl font-semibold text-gray-800 mb-6 text-center'>Opps!</h1>
                <p className='text-xl text-gray-700 mb-6'>Sorry, an unexpected error has occurred.</p>
                <p className='text-md text-gray-500 text-center'>
                    <i>{error.statusText || error.error.message}</i>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage;
