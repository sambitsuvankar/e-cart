import React from 'react'


const CollectionSkeleton = () => {
    return(
        <div className='bg-white h-auto justify-evenly items-center w-screen grid grid-cols-4 gap-0 px-6 py-12 animate-pulse'>
            <div key={1} className="w-auto h-72 sm:col-span-1 col-span-2 bg-blue-200 rounded-md m-1"/>
            <div key={2} className="w-auto h-72 sm:col-span-1 col-span-2 bg-blue-200 rounded-md m-1"/>
            <div key={3} className="w-auto h-72 sm:col-span-1 col-span-2 bg-blue-200 rounded-md m-1"/>
            <div key={4} className="w-auto h-72 sm:col-span-1 col-span-2 bg-blue-200 rounded-md m-1"/>
        </div>
    )
}
export default CollectionSkeleton