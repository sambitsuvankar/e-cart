import React, {lazy, Suspense} from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux'
import './App.css';

const SignInPage = lazy(() => import('./container/signInContainer/signInPage'))
const Header = lazy(() => import('./component/header/header.component'))
const HomePage = lazy(() => import('./container/homePage/homePage'))
const ShopComponent = lazy(() => import('./container/shopPage/shopComponent'))
const ProductComponent = lazy(() => import('./container/productPage/product.component'))
const CheckoutPage = lazy(() => import('./container/checkoutPage/checkoutPage.component'))
const SearchResultComponent = lazy(() => import('./container/searchResultPage/searchResultComponent'))

function App() {

  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <div className="App">
    <Suspense fallback={<div>Loading.............</div>}>
    <Header/>
      <Routes>
          <Route exact path='/' element={<HomePage/>} /> 
          <Route  path='/shop/:category' element={<ShopComponent/>} /> 
          <Route  path={`/shop/:param1/:id`} element={<ProductComponent/>} /> 
          <Route exact  path={`/search`} element={<SearchResultComponent/>} /> 
          <Route exact path='/signin' element={currentUser ? <Navigate  to="/"/> : <SignInPage/>}  /> 
          <Route exact path='/cart' element={currentUser ? <CheckoutPage/> : <Navigate  to="/signin"/> }  /> 
          </Routes>
          </Suspense>
    </div>
  );
}



export default App;
