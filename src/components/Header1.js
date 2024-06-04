import React from 'react'

const Header1 = () => {
  return (
    <div className='flex justify-between shadow-sm'>
         <div className='grid grid-flow-col'>
        <img className='span-2 w-48 mx-4' alt='logo' src='/image/logo.png'/>
    </div>
    <div className='flex span-10'>
        <ul className='flex mx-12'>
            <li className='px-4 py-12'>Home</li>
            <li  className='px-4 py-12'>About</li>
            <li  className='px-4 py-12'>Vechical Models</li>
            <li  className='px-4 py-12'>Conatct</li>
            <li  className='px-2 py-12'>SignIn</li>
            <div className='my-10'>
            <button className='px-2 py-2 mx-2 font-bold font-sans bg-orange-600 text-white' > Registor </button>
            </div>
        </ul>
    </div>
    </div>
    
  )
}

export default Header1