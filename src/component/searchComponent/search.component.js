import React,{useState} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { SearchIcon, RefreshIcon } from '@heroicons/react/solid';
import { startSearch } from '../../redux/menu/menu.actions';



const SearchComponent = ({startSearch}) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isSearch, setIsSearch] = useState(false)
    const navigate = useNavigate()

    const navigateToSearch = (text) => {
        startSearch(text)
        navigate('/search/category')
        setIsSearch(true)
    }

    const navigateToHome = () => {
        setIsSearch(false)
        navigate('/')
    }
  return (
    <div className="w-10/12 h-4/6 sm:h-3/6 flex bg-white rounded-md pl-4 shadow-lg items-center">
        <input onChange={(e)=> setSearchTerm(e.target.value)} type="text" placeholder="Search Items here" className="w-full h-full rounded-sm focus:outline-none">
        </input>
        {
            isSearch ? (
                <RefreshIcon onClick={() => navigateToHome()} className="h-5/6 w-1/12 mr-2 text-slate-400  cursor-pointer"/>
            ) : (

                <SearchIcon onClick={() => searchTerm ? navigateToSearch(searchTerm): null} className="h-5/6 w-1/12 mr-2 text-slate-400  cursor-pointer"/>
            )
        }
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    startSearch : (text) => dispatch(startSearch(text))
})
export default connect(null, mapDispatchToProps)(SearchComponent);
