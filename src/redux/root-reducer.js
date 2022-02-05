import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './menu/menu.reducers';
import userReducer from './user/user.reducers';
import shopReducer from './shop/shop.reducers';
import cartReducer from './cart/cart.reducers';


const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart','user','shop','menu']
}

const rootReducer = combineReducers({
    menu: menuReducer,
    user: userReducer,
    shop: shopReducer,
    cart: cartReducer
});


export default persistReducer( persistConfig, rootReducer );