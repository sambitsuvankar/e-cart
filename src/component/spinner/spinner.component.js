import React from 'react';

const Spinner= () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-blue-100'>
        <div className='font-bold w-80 h-80 flex justify-center items-center bg-blue-500 rounded-full'>
            
        <div className='font-bold text-white flex justify-center items-center w-72 h-72 animate-ping bg-blue-500 rounded-full'>
        </div>
        <div className="w-52 h-52 font-bold text-white flex justify-center items-center absolute">Loading....</div>
        </div>
    </div>
  )
}



export default Spinner;
