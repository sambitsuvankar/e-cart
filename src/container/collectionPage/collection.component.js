import React from "react";
import { useNavigate, useLocation } from "react-router";

const CollectionComponent = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <div key={props.id} onClick={() => navigate(`${location.pathname}/${props.id}`)} className="w-auto h-60 sm:h-96 col-span-2 sm:col-span-1 flex flex-col bg-white rounded-xl m-2 cursor-pointer shadow-2xl overflow-hidden" >
            <div className="h-4/5 w-auto bg-cover bg-center bg-no-repeat rounded-t-lg hover:scale-105 overflow-hidden" style={{backgroundImage: `url(${props.image})`, backgroundSize:'40% ', transition: 'ease 1000ms'}}></div>
            <div className="h-1/5 w-auto bg-blue-400 px-5 flex justify-evenly items-center font-sans font-semibold rounded-b-lg">
                <p>Price</p>
                <p>{` $${props.price}`}</p>
            </div>
        </div>
    )
}
export default CollectionComponent