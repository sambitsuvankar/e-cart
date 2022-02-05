import { takeLatest, call, put, all } from 'redux-saga/effects';    
import MenuActionTypes from './menu.types';
import axios from 'axios'

import { fetchCategorySuccess, fetchCategoryFailure, updateCollections } from './menu.actions';


export  function* fetchCategoryAsync(){
    try {
        const productref =  yield axios.get('https://fakestoreapi.com/products')
                            .then(res=> res.data)
        yield put(fetchCategorySuccess(productref))
        yield put(updateCollections(productref))
    } catch (error) {
        yield put(fetchCategoryFailure(error.message))
    }
}

export function* fetchCategoryStart(){
    yield takeLatest(MenuActionTypes.FETCH_CATEGORY_START, fetchCategoryAsync)
}

export function* menuSagas(){
    yield all([call(fetchCategoryStart)])
}