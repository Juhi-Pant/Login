import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'

function login() {
  return (
    <>
      <div className='h-screen w-full flex justify-center items-center bg-gb bg-no-repeat bg-cover'>
        <div>
        <div className='text-center text-2xl font-bold pb-10 text-blue-900'>RESULT PORTAL</div>
        <div className='bg-[#D9D9D9] h-80 w-80  rounded-3xl'>
          <div className='font-bold flex justify-center items-center py-4 text-xl'>LOGIN</div>
          <div className='grid grid-cols-1 gap-8 mt-10'>

          {/*<div className='bg-white h-10 w-2/3 mx-auto rounded-3xl'></div>
          <div className='bg-white h-10 w-2/3 mx-auto rounded-3xl'></div>*/}

          <div className='mx-auto'><FontAwesomeIcon icon={faUser} className='mr-2'/><input type="text" className='rounded-3xl' placeholder='   Username'/></div>
          <div className='mx-auto'><FontAwesomeIcon icon={faKey} className='mr-2'/><input type="text" className='rounded-3xl' placeholder='   Password'/></div>
          </div>
          <div className='bg-red-700 w-20 text-center mx-auto mt-8 rounded-md cursor-pointer font-bold'>SIGN IN</div>
          <div className='flex justify-between'>
          <div className='text-blue-600 text-sm ml-4 mt-12 cursor-pointer'>Forgot Password?</div>
          <div className='text-blue-600 text-sm mt-12 mr-4 cursor-pointer'>Sign Up</div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default login
