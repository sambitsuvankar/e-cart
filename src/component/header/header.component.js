import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import  Logo from '../../assets/logo.png'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { UserCircleIcon, SearchIcon, LogoutIcon, ShoppingBagIcon, ShoppingCartIcon} from '@heroicons/react/solid'
import { signOutStart } from "../../redux/user/user.actions";
import SearchComponent from "../searchComponent/search.component";

const Header = ({startLogOut}) => {
    const currentUser = useSelector(state => state.user.currentUser)
    const cart = useSelector(state => state.cart)
    const numberOfCartItems = cart.cartItems.length
    return(
        <div className="w-screen h-32 bg-blue-400 flex justify-center items-center flex-col ">
            <div className="w-screen h-16 sm:h-20 bg-blue-400 flex justify-between">
                <div  className="h-full w-24 sm:w-32 cursor-pointer ml-3 sm:ml-4 bg-cover bg-center" style={{backgroundImage: 'url("../../assets/logo.png")', backgroundSize:'150%'}} >
                    <Link to="/">
                        <img src={Logo} className="w-4/5 h-full p-3"></img>
                    </Link>
                </div>

                <div className="h-16 w-11/12 sm:h-full hidden items-center justify-center mx-0 px-0 sm:flex">
                    <SearchComponent/>
                </div>

                <div className="flex w-2/6 sm:w-2/12 h-full justify-evenly ">
                    <Tippy content='Go to Cart'>
                        <Link to="/cart">
                            <ShoppingCartIcon className="h-3/5 text-white my-4 cursor-pointer"/>
                            <div className="bg-red-400 h-5 w-5 inline-flex text-white absolute top-2 sm:top-8 rounded-full justify-center items-center">
                            {numberOfCartItems}
                            </div>
                        </Link>
                    </Tippy>
                    {currentUser ? (
                        <Tippy content='Log Out'>
                            <Link to="/">
                                <LogoutIcon onClick={startLogOut} className="h-3/5 text-white my-4 cursor-pointer"/>
                            </Link>
                        </Tippy>
                    ) : (
                        <Tippy content="Sign In">
                            <Link to='/signin'>
                                <UserCircleIcon  className="h-3/5 text-white my-4 cursor-pointer"/>
                            </Link>
                        </Tippy>
                        )}
                </div>
            </div>
            <div className="h-16 w-11/12 flex flex-col items-center justify-center mx-0 px-0 sm:hidden">
                <SearchComponent/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogOut : () => dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(Header);