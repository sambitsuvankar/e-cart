import React from "react";
import { useSelector } from "react-redux";
import CartItemComponent from "../../component/cartComponent/cartIem.component";
import cart from '../../assets/cart.png'

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce(( accumulatedQuantity, cartItem ) => accumulatedQuantity + ( cartItem.price * cartItem.quantity ), 0).toFixed(2)

    return(
        <div className="w-auto h-screen m-4 flex flex-col justify-between sm:justify-evenly items-center sm:m-10">
            <div className="w-full h-auto flex flex-col sm:w-1/2">
                {
                    cartItems ? cartItems.map(({id, price, title, quantity, image, category, description}) => (
                        <CartItemComponent id={id} price={price} title={title} quantity={quantity} image={image} category={category} description={description}/>
                    )) : (<img src={cart} alt="No Items" className="w-auto h-4/6 p-3"></img>)
                }
            </div>
            <div className="w-full h-14 bg-white rounded-lg m-1 flex shadow-2xl overflow-hidden sm:w-1/2 ">
                <div className="w-1/2 h-full flex justify-center items-center text-black">Total = ${totalPrice}</div>
                <div className="w-1/2 h-full bg-blue-400 flex justify-center items-center text-white active:bg-purple-700 hover:bg-blue-700 cursor-pointer">Place Order</div>
            </div>

        </div>
    )
}

export default CheckoutPage;