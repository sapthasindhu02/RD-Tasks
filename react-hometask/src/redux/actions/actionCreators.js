import syncActions from './syncronous-actions';

export const types={
    buynow:'BUY_NOW',
    addtoCart:'ADD_TO_CART',
    deleteFromCart:'DELETE_FROM_CART',
    getDatafromServer:'GET_DATA',
    setCurrentBook:'SET_CURRENT_BOOK',
    ordered:'ORDERED',
    addCartItemstoBuy:'ADD_ITEMS_FROM_CART',
    address:'ADD_ADDRESS'
}


const checkOut=(book,fromHome)=>{
    return {
        type:types.buynow,
        payload:{
            book,
            fromHome:fromHome
        }
    }
}
const updateBookstobuy=()=>{
    return {
        type:types.addCartItemstoBuy,
    }
}
const saveAddress=(a)=>{
    return {
        type:types.address,
        payload:{
            address:a
        }
    }
}
const Orderconfirmed=(fromCart)=>{
    return{
        type:types.ordered,
        payload:{
            fromCart
        }
    }
}

const addtoCart=(book)=>{
    return {
        type:types.addtoCart,
        payload:{
            book
        }
    }
}

const deleteFromCart=(id)=>{
    return {
        type:types.deleteFromCart,
        payload:{
            isDeleted:true,
            bookID:id
        }
    }
}
const updateCurrentBook=(book)=>{
        return {
            type:types.setCurrentBook,
            payload:{
                book
            }
        
    }
}

export default {
    checkOut,
    addtoCart,
    deleteFromCart,
    updateCurrentBook,
    Orderconfirmed,
    updateBookstobuy,
    saveAddress
}