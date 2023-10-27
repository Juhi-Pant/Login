import React from 'react';


function Navbar(props) {
  return (
    <>
   {/*Navbar*/}
   <div className='bg-[#181c2c] h-24 flex relative'>
      <div className='flex w-1/2 items-center'>

      {/*Logo*/}
       <img src={props.img} alt="" className='h-16 w-16 bg-center mx-2 bg-no-repeat'/>
       
       {/*University Name*/}
       <div>
       <div className='text-2xl text-white font-medium'>PANJAB UNIVERSITY</div>
       <div className='text-sm text-white font-medium'>Established under the Panjab University Act VII of 1947</div>
       <div className='text-sm text-white font-medium'>Enacted by Government of India</div>
       </div>
     </div>
    {/*Buttons*/}
      <div className='flex w-1/2 items-center justify-end text-xl text-white font-md'>
       <div className='mx-4 hover:bg-white hover:text-[#181c2c] p-2 px-4 rounded-md hover:font-semibold hover:duration-500'>Home</div>
       <div className='mx-4 hover:bg-white hover:text-[#181c2c] p-2 px-4 rounded-md hover:font-semibold hover:duration-500'>Notices</div>
       <div className='mx-4 hover:bg-white hover:text-[#181c2c] p-2 px-4 rounded-md hover:font-semibold hover:duration-500'>Contact Us</div>
       <div className='mx-4 hover:bg-white hover:text-[#181c2c] p-2 px-4 rounded-md hover:font-semibold hover:duration-500'>Login</div>
      </div>
     </div>
   </>
  )
}

export default Navbar
