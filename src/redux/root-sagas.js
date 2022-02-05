
import { all, call } from 'redux-saga/effects';

import { menuSagas } from './menu/menu.sagas';
import { userSagas } from './user/user.sagas';
import { shopSagas } from './shop/shop.sagas';
import { cartSagas } from './cart/cart.sagas';
 
export default function* rootSaga(){
    yield all([
        call(menuSagas),
        call(userSagas),
        call(shopSagas),
        call(cartSagas)
    ])
}    