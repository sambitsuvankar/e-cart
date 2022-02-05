import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = (collection) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
    payload : collection
});

export const fetchCollectionsSuccess = ( collectionsMap ) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
export const sortAscending = (collection) => ({
    type: ShopActionTypes.SORT_ASCENDING,
    payload : collection
})
export const sortDescending = (collection) => ({
    type: ShopActionTypes.SORT_DESCENDING,
    payload: collection
})