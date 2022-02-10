export const types={
    buynow:'BUY_NOW',
    addtoCart:'ADD_TO_CART',
    deleteFromCart:'DELETE_FROM_CART',
    getDatafromServer:'GET_DATA',
    setCurrentBook:'SET_CURRENT_BOOK    '
}
const syncAddCart=(book)=>{
    return {
        type:types.addtoCart,
        payload:{
            book
        }
    }
}

const syncCheckout=(book)=>{
    return {
        type:types.buynow,
        payload:{
            book
        }
    }
}
const syncDeleteFromCart=(isDeleted,id)=>{
    return {
        type:types.deleteFromCart,
        payload:{
            isDeleted,
            bookID:id
        }
    }
}
const syncFetchDataFromServer=(data)=>{
    return{
        type:types.getDatafromServer,
        payload:{
            data
        }
    }
}

const syncUpdatedCurrentBook=(book)=>{
    return {
        type:types.setCurrentBook,
        payload:{
            book
        }
    }
}
export default {
    syncAddCart,
    syncCheckout,
    syncDeleteFromCart,
    syncFetchDataFromServer,
    syncUpdatedCurrentBook
}