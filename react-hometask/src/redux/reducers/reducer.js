import initialState from "../initialState";

function reducer(state=initialState,action){
    switch(action.type){
        case 'BUY_NOW':{
            console.log("entered red buy book is "+JSON.stringify(action.payload.book));
            console.log("address is "+JSON.stringify(state.address));
            console.log("books to buy is "+JSON.stringify(state.booksToBuy));
            if(action.payload.fromHome){
            state= Object.assign({},state,{booksToBuy:[action.payload.book],isDeleted:false});

            }
            else{
            state.booksToBuy.push(action.payload.book);
            state= Object.assign({},state,{booksToBuy:state.booksToBuy,isDeleted:false});

            }
            console.log("bookstobuy  is"+JSON.stringify(state.booksToBuy));
            return state;
        }
        case 'ADD_TO_CART':{
            state.cart.push(action.payload.book);
            console.log("address is "+JSON.stringify(state.address));

            state.cart.map(item=>console.log("ite is "+item.title+"no:"+item.isbn));
            

            return Object.assign({},state,{cart:state.cart,isDeleted:false});
            }
        case 'DELETE_FROM_CART':{
            if(action.payload.isDeleted){
            console.log("address is "+JSON.stringify(state.address));

                state.cart.forEach((book,index)=>{
                if(book.isbn===action.payload.bookID){
                    state.cart.splice(index,1);
                    return Object.assign({},state,{cart:state.cart,isDeleted:action.payload.isDeleted});
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
            console.log("address is "+JSON.stringify(state.address));
            return Object.assign({},state,{currentBook:action.payload.book,isDeleted:false})
        }
        case 'ADD_ADDRESS':{
            return Object.assign({},state,{address:action.payload.address,isDeleted:false})
        }
        case 'ORDERED':{
            let Cart;
            console.log("entered ordered");
            let addAddress;
            (action.payload.address)?addAddress=action.payload.address:addAddress=state.address
            console.log("books to buy"+JSON.stringify(state.booksToBuy));
           // state.products.map(book=>{( book.isbn===state.booksToBuy.isbn[0])?book.status="DELIVERED":book.status=book.status})
           if(action.payload.fromCart){
            state.cart.map(book=>{
                state.products.find(b=>{
                    if(book.isbn===b.isbn){
                        b.status='DELIVERED';
                    }
                })
            })
             Cart=[];
           }
           else{
           state.booksToBuy.map(book=>{
               state.products.find(b=>{
                   if(book.isbn===b.isbn){
                       b.status='DELIVERED';
                   }
               })
           })
           Cart=state.cart;
        }
           return Object.assign({},state,{isDeleted:false,address:addAddress,cart:Cart})
          
           //state.booksToBuy.map(book=>{(state.products.find(book_inStock=>(book.isbn===book_inStock.isbn)?book_inStock.status='DELIVERED':book_inStock.status=book_inStock.status))}) 
          
           // return Object.assign({},state,{products:state.products,booksToBuy:null,isDeleted:false,address:addAddress})
        }
        case 'ADD_ITEMS_FROM_CART':{
            return Object.assign({},state,{booksToBuy:state.cart,isDeleted:false})
        }
        default:return state
    }
}
export default reducer;