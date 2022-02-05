import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import CollectionComponent from '../collectionPage/collection.component'
import { fetchCollectionsStart, sortAscending, sortDescending } from '../../redux/shop/shop.actions'
import CollectionSkeleton from '../../component/skeleton/collection.skeleton'
import {SortAscendingIcon, SortDescendingIcon} from '@heroicons/react/solid'
import 'tippy.js/dist/tippy.css'

const ShopComponent = ({fetchCollectionStart, sortAscending, sortDescending}) => {
    // const location = useLocation()
    const params= useParams()

    useEffect(()=>{
        fetchCollectionStart(params.category)
    },[])

    const CollectionItem = useSelector(state => state.shop)
    
    return(
        <div className='w-full h-auto bg-white flex flex-col mb-4'>
            <div className='h-10 w-full bg-white flex px-4 mt-4 sm:px-14'>
                <div className=' h-10 w-5/12 sm:w-5/6 flex px-4'>
                    <SortAscendingIcon onClick={()=> sortAscending(CollectionItem.collection)} className='h-full w-4/12 pl-2 sm:w-12 text-slate-400 cursor-pointer'/>
                    <SortDescendingIcon onClick={()=> sortDescending(CollectionItem.collection)} className='h-full w-4/12 pl-2 sm:w-12 text-slate-400 cursor-pointer'/>
                </div>
                <div className=' h-full w-7/12 justify-end flex px-4 items-center'>
                    <p className=' px0 font-semibold text-base sm:text-2xl text-slate-800'>{params.category}</p>
                </div>
            </div>

            {CollectionItem.isFetching ? (<CollectionSkeleton/>) : (
                <div className="bg-white h-full sm:gap-4 justify-evenly items-center w-screen grid grid-cols-4 gap-4 p-4 sm:p-14">

                    {
                        CollectionItem.collection?.map(({id, ...otherProps})=>
                            <CollectionComponent id={id} {...otherProps}/>)
                    }
        
                </div>

            )}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionStart : (category) => dispatch(fetchCollectionsStart(category)),
    sortAscending : (category) => dispatch(sortAscending(category)),
    sortDescending : (category) => dispatch(sortDescending(category)),
})

export default connect(null, mapDispatchToProps)(ShopComponent)