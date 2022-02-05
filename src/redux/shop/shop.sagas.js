import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import ShopActionTypes from './shop.types';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionAsync(category){
    // console.log(category)
    try {
        const collectionRef = yield axios.get(`https://fakestoreapi.com/products/category/${category.payload}`)
                                    .then(res=>res.data)
        yield put(fetchCollectionsSuccess(collectionRef))
    } catch (error) {
        yield put(fetchCollectionsFailure(error))
    }
}

export function* fetchCollectionStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionStart)])
}