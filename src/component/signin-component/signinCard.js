import React, {useEffect} from "react";
import { connect } from "react-redux";
import { SignInStart, signOutStart } from "../../redux/user/user.actions";

const SignInCard = ({signInStart, signOutStart}) => {
    // useEffect(()=>{
    //     signOutStart()
    // },[])
    return(
        <div className="bg-white w-80 h-64 rounded-md">
            <p className="my-7 font-sans font-medium">Sign in through Google to Access the Cart!</p>
            <button className="bg-blue-500 my-10 text-white w-1/2 h-1/5 rounded-md focus:bg-indigo-600 hover:bg-blue-700" onClick={signInStart}>Sign In With Google</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signInStart : () => dispatch(SignInStart()),
    signOutStart : () => dispatch(signOutStart())
})
export default connect(null, mapDispatchToProps) (SignInCard)