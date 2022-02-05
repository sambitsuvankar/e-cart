import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { fetchCategoryStart } from '../../redux/menu/menu.actions';
import Skeleton from '../../component/skeleton/skeleton'
import MenuItems from '../../component/menuItem/menuItem';

const HomePage = ({ fetchCategoryStart }) => {

    const menuState = useSelector(state => state.menu)

    useEffect(() => {
        fetchCategoryStart()
    },[])

    return(
        <div key={50} className='h-screen w-full bg-white'>
        {menuState.isFetching ? (<Skeleton/>) : (
            <div key={60} className='h-full w-screen bg-white p-4 grid grid-cols-4 gap-4 sm:p-16 sm:px-40 sm:h-full'>
                {
                    menuState.categories?.map(({category, id, image, size}) => <MenuItems id={id} size={size} image={image} category={category}/>)
                }
            </div>
        )}
        </div>
    )
}
// {menuState.isFetching ? (<Skeleton/>) : null}
const mapDispatchToProps = dispatch => ({
    fetchCategoryStart : () =>  dispatch(fetchCategoryStart())
})
export default connect(null, mapDispatchToProps)(HomePage)