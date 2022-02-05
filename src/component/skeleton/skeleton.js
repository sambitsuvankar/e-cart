import React from 'react'


const Skeleton = () => {
    return(
        <div key={5} className='h-full sm:h-3/5 w-screen bg-white p-4 grid grid-cols-4 gap-4 sm:p-16 sm:px-40 '>
                <div key={1} className='bg-blue-100 w-auto h-full m-1 rounded-2xl shadow-2xl col-span-2 sm:col-span-1'></div>
                <div key={2} className='bg-blue-100 w-auto h-full m-1 rounded-2xl shadow-2xl col-span-2 sm:col-span-1'></div>
                <div key={3} className='bg-blue-100 w-auto h-full m-1 rounded-2xl shadow-2xl col-span-4 sm:col-span-1'/>
                <div key={4} className='bg-blue-100 w-auto h-full m-1 rounded-2xl shadow-2xl col-span-4 sm:col-span-1'/>
        </div>
    )
}
export default Skeleton