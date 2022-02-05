import React from 'react';

import SignInCard from '../../component/signin-component/signinCard';





const SignInPage = () => {
    return(
        <div style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg")'}} className='h-screen w-full  flex content-center items-center justify-center bg-cover bg-no-repeat bg-center absolute top-0'>
            <SignInCard/>
        </div>
    )
}

export default SignInPage;