const MenuActionTypes = {
    UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS',
    FETCH_CATEGORY_START: 'FETCH_CATEGORY_START',       // It tells the redux that we are starting to fetch the data. This is actually before any data gets fetched ,It is our 1st API calls before our firestore begins
    FETCH_CATEGORY_SUCCESS: 'FETCH_CATEGORY_SUCCESS',  // which is where it comes back to us with a successful API request and hopefully the data that we nedd is comeback as well
    FETCH_CATEGORY_FAILURE: 'FETCH_CATEGORY_FAILURE',
    START_SEARCH : 'START_SEARCH' 
}

export default MenuActionTypes;