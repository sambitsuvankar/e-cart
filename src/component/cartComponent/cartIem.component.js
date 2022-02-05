import React from "react";
import { connect } from "react-redux";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { addItem, removeItem, clearItemFromCart } from "../../redux/cart/cart.actions";

const CartItemComponent = ( {id, price, title, quantity,image, description,addItem, removeItem, clearItem}) => {
    const props = {id : id, price, title, quantity, image, description}
    const priceToQuant =( price * quantity).toFixed(2)

    return(
        <div key={id} className="w-auto h-40 sm:h-52 bg-white flex rounded-xl shadow-2xl overflow-hidden m-1">
            <div className="w-1/3 h-full bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${image})`, backgroundSize: '38%'}}></div>

            <div className="w-2/3 h-full flex flex-col justify-center">
                <div className="w-full h-1/6 m-1 mt-2 pl-4 font-semibold flex justify-between px-4" style={{textAlign: 'left'}}>
                    <p>Item</p>
                    <TrashIcon onClick={()=> clearItem(props)} className="h-3/4 cursor-pointer text-blue-400"/>
                </div>
                <div className="w-full h-2/6 m-1 pl-4 text-xs" style={{textAlign: 'left'}}>{title}</div>
                <div className="w-full h-1/6 m-1 pl-4 font-semibold" style={{textAlign: 'left'}}>Price    ${priceToQuant}</div>
                <div className="w-auto h-2/6 m-1 flex">
                    <div className="w-1/2 h-full flex items-center pl-4 font-semibold">Quantity</div>
                    <div className="w-1/2 h-full flex items-center justify-around">
                        <MinusCircleIcon onClick={() =>removeItem(props)} className="w-1/3 h-1/3 text-blue-400 cursor-pointer"/>
                        <p className="font-semibold">{quantity}</p>
                        <PlusCircleIcon onClick={()=> addItem(props)} className="w-1/3 h-1/3 text-blue-400 cursor-pointer"/>
                    </div>
                </div>
            </div>
            <div className="w-auto h-[1px] border-t-2 border-black"></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=> ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearItem: (item) => dispatch(clearItemFromCart(item))
})
export default connect(null, mapDispatchToProps)(CartItemComponent)