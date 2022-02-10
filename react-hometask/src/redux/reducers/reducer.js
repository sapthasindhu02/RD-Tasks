import initialState from "../initialState";

function reducer(state=initialState,action){
    switch(action.type){
        case 'BUY_NOW':return Object.assign({},state,{bookToBuy:action.payload.book});
        case 'ADD_TO_CART':{
            state.cart.push(action.payload.book);
            return Object.assign({},state,{cart:state.cart});
            }
        case 'DELETE_FROM_CART':{
            if(action.payload.isDeleted){
                state.cart.forEach((book,index)=>{
                if(book.isbn===action.payload.bookID){
                    state.cart.splice(index,1);
                    return Object.assign({},state,{cart:state.cart});
                }
            })
            }
            return state;
        }
        case 'GET_DATA':{
            return Object.assign({},state,action.payload.data);
        }
        case 'SET_CURRENT_BOOK':{
            console.log(action.payload.book);
            return Object.assign({},state,{currentBook:action.payload.book})
        }
        default:return state
    }
}
export default reducer;