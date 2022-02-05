import MenuActionTypes from "./menu.types";
import { setMenuItemsFromCategory, searchProducts } from "./menu.utils";

const INITIAL_STATE = {
    categories: null,
    products: [],
    searchResults: [],
    isFetching: false,
    errorMessage: undefined
}

const menuReducer = (state = INITIAL_STATE, action ) => {
    switch ( action.type ){
        case MenuActionTypes.FETCH_CATEGORY_START:
            return {
                ...state,
                isFetching: true
            };
        case MenuActionTypes.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: setMenuItemsFromCategory(state.categories, action.payload) 
            };
        case MenuActionTypes.FETCH_CATEGORY_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage: action.payload
            };
        case MenuActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                products: action.payload
            };
        case MenuActionTypes.START_SEARCH:
            return{
                ...state,
                searchResults: searchProducts(state.products, action.payload)
            };
        default:
            return state
    }
}

export default menuReducer;