import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RefreshIcon } from '@heroicons/react/solid';
import CollectionComponent from '../collectionPage/collection.component';



const SearchResultComponent =(props) => {
 
  const navigate = useNavigate()
  const searchResults = useSelector(state => state.menu.searchResults)

  return (
    <div className='w-screen h-auto bg-white flex flex-col'>
      {
        searchResults.length > 0 ? (
          <div className="bg-white h-full sm:gap-4 justify-evenly items-center w-screen grid grid-cols-4 gap-4 p-4 sm:p-14">

                    {
                        searchResults.map(({id, ...otherProps})=>
                            <CollectionComponent id={id} {...otherProps}/>)
                    }
        
                </div>//
        ) : (
          <div className='w-screen h-screen flex justify-center items-center bg-blue-100'>
            <div className='w-3/12 h-3/12 bg-blue-100 flex justify-between items-center'>
              <div className='font-bold'>Results Not Found</div>
              <RefreshIcon className='w-3/12 h-1/5 cursor-pointer' onClick={() => navigate('/')}/>
            </div>
          </div>
        )
      }
    </div>
  )
}







export default SearchResultComponent;
