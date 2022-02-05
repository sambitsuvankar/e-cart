import { takeLatest , put, all, call } from 'redux-saga/effects';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import UserActionTypes from './user.types';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from './user.actions';

export function* SignInWithGoogle(){
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' }) 
    try {
        const {user} = yield signInWithPopup(auth, provider)
        const userSnapShot = yield call(createUserProfileDocument,user) 
             
        // console.log(userSnapShot)
        yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))  
    } catch (error) {
        yield put(signInFailure(error))
    }

}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.SIGN_IN_START, SignInWithGoogle)
}

export function* signOut(){
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onGoogleSignOut(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onGoogleSignOut)
    ])
}