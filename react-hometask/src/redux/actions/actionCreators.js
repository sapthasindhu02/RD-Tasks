import axios from 'axios';
import syncActions from './syncronous-actions';

const API_BASE_URL='http://localhost:3033';

const checkOut=(book)=>{
    return (dispatch)=>{
        axios.put(`/bookToBuy`,book)
            .then(res=>dispatch(syncActions.syncCheckout(res.data)))
             .catch(err=>console.log("error occured at buy"+err))
    }
}

const addtoCart=(book)=>{
    return (dispatch)=>{
        axios.post(`/cart`,book)
             .then(res=>dispatch(syncActions.syncAddCart(res.data)))
             .catch(err=>console.log("error while adding to cart"+err))
    }
}

const deleteFromCart=(id,book)=>{
    return (dispatch)=>{
        axios.delete(`/cart/:id`,book)
             .then(res=>dispatch(syncActions.syncDeleteFromCart(true,id)))
             .catch(err=>console.log("error while deleting from cart"+err))
    }
}

const fetchData=()=>{
    return (dispatch)=>{
        axios.get('/')
            .then(res=>dispatch(syncActions.syncFetchDataFromServer(res.data)))
            .catch(err=>console.log("error occured while fetching data from server"+err))
    }
}
const updateCurrentBook=(book)=>{
    return (dispatch)=>{
        axios.put('/currentBook',book)
             .then(res=>dispatch(syncActions.syncUpdatedCurrentBook(res.data)))
            .catch(err=>console.log("error occured while selecting the book"+err))
    }
}

export default {
    checkOut,
    addtoCart,
    deleteFromCart,
    fetchData,
    updateCurrentBook
}