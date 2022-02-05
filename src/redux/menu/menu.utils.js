export const setMenuItemsFromCategory = (categoryArr, payloadArr) => {
    const newLocal = 'category';
    categoryArr =  [...new Map(payloadArr.map(item =>
        [item[newLocal], item])).values()];
    const newCategory = categoryArr.map((item, i)=> i > 1 ? ({...item , size : 'large'}) : ({...item , size : 'small'})  );
    return newCategory;
}

export const searchProducts = (productArr, searchText) => {
    const searchResult = productArr.filter((val) => 
        val.title.toLowerCase().includes(searchText.toLowerCase())
    )
    return searchResult
}