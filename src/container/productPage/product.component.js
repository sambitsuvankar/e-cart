import React from "react";
import { useSelector, connect } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom'
import CollectionSkeleton from "../../component/skeleton/collection.skeleton";
import { addItem } from "../../redux/cart/cart.actions";

const ProductComponent = ({addItem})=> {
    const params = useParams()
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser)
    const productState = useSelector(state => state.menu)
    const product = productState.products?.filter((item) => item.id == params.id).pop()
    return(
        <div>
        {
            productState.isFetching ? (<CollectionSkeleton/>) : (
                <div className="w-auto h-auto bg-white flex flex-col p-6 sm:flex-row">

                    <div className="w-auto h-[38rem] bg-white flex flex-col sm:w-1/2 sm:h-[46rem] sm:justify-center">
                        <div className="flex justify-items-end m-2 font-sans font-semibold text-xl sm:m-4">Product Name</div>
                        <div className="flex justify-items-end m-2 font-sans font-normal text-sm sm:m-4">{product.title}</div>
                        <div className="w-auto h-[30rem] sm:h-[26rem] sm:w-4/5 sm:m-4 mt-4 rounded-2xl bg-white shadow-2xl bg-center bg-cover bg-no-repeat" style={{backgroundImage : `url(${product.image})`, backgroundSize: "40%"}}/>
                      
                    </div>


                    <div className="w-auto h-auto flex flex-col sm:w-1/2 sm:justify-center sm:h-[46rem]">
                        <div className="w-auto h-1/6 bg-white p-2 sm:p-4 flex items-center justify-around font-semibold font-sans text-xl">
                            <p>Price</p>
                            <p>{`$${product.price}`}</p>
                        </div>

                        <div className="w-auto h-[1px] border-t-2 border-black"></div>

                        <div className="w-auto h-3/4 bg-white flex flex-col mt-2 sm:h-2/5">
                            <div className="flex justify-items-end p-2 sm:p-4 mb-2 font-sans font-semibold text-xl">Product Description</div>
                            <div className="flex h-auto justify-items-end p-2 sm:p-4 font-sans font-normal text-sm" style={{textAlign:'left'}}>{product.description}</div>
                            <div className="flex w-auto h-2/3 p-2 sm:p-4 bg-white justify-between">
                                <div className="flex flex-col w-full h-full">
                                    <div className="flex justify-items-end pl-2 mb-2 font-sans font-semibold text-lg mt-4">Category</div>
                                    <div className="flex justify-items-end pl-2 font-sans font-normal text-sm">{product.category}</div>
                                </div>
                                <div className="flex flex-col w-full h-full pr-2">
                                    <div className="flex place-content-end pl-2 mb-2 font-sans font-semibold text-lg mt-4">Ratings</div>
                                    <div className="flex place-content-end pl-2 font-sans font-normal text-sm">{`${product.rating.rate}/5`}</div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => currentUser ? addItem(product) : navigate('/signin') } className="w-auto h-14 mt-3 p-2 sm:p-4 bg-blue-500 rounded-lg flex items-center justify-center text-white font-sans font-semibold active:bg-purple-700 hover:bg-blue-700 cursor-pointer">Add To Cart</div>
                    </div>

                </div>
            )
        }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem : (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductComponent)