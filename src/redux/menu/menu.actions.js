import MenuActionTypes from "./menu.types";

export const fetchCategoryStart = () => ({
    type : MenuActionTypes.FETCH_CATEGORY_START
})

export const fetchCategorySuccess = ( category ) => ({
    type : MenuActionTypes.FETCH_CATEGORY_SUCCESS,
    payload : category
})

export const fetchCategoryFailure = ( errorMessage ) => ({
    type : MenuActionTypes.FETCH_CATEGORY_FAILURE,
    payload : errorMessage
})
export const updateCollections = ( collection ) => ({
    type : MenuActionTypes.UPDATE_COLLECTIONS,
    payload : collection
})
export const startSearch = ( searchText ) => ({
    type : MenuActionTypes.START_SEARCH,
    payload : searchText
})