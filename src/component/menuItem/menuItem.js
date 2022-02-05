import React from "react";
import { useNavigate } from "react-router-dom";


const MenuItems = ({id, image, category, size}) => {
    const navigate = useNavigate()

    return(
        <div key={id} onClick={()=> navigate(`shop/${category}`)} className={`bg-white w-auto h-60 sm:h-3/5 m-1 rounded-xl flex flex-col content-center shadow-2xl justify-center cursor-pointer sm:col-span-1 overflow-hidden  ${size == 'large' ? 'col-span-4' : 'col-span-2'}`}>
            <div style={{backgroundImage : `url(${image})`, backgroundSize: '50%', transition: 'ease 1000ms'}} className="w-full h-4/5 bg-center bg-cover bg-no-repeat hover:scale-110 ">
            </div>
            <div className="h-1/5 w-auto bg-blue-400 rounded opacity-80 flex flex-col justify-center items-center">
                <p className="text-black  font-bold text-sm" style={{fontFamily: '-moz-initial'}}>{category}</p>
                <p className="text-black" style={{fontFamily: '-moz-initial'}}>Shop Now</p>
            </div>
        </div>
    )
}
export default MenuItems;