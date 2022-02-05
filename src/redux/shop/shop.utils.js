export const sortAscendingCollection =(collection)=> {
   return collection.sort((a,b) => a.price - b.price)
}
export const sortDescendingCollection =(collection)=> {
   return collection.sort((a,b) => b.price - a.price)
}