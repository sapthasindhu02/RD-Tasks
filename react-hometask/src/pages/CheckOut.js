import React from "react"
import {useSelector} from "react-redux"
import ShippingAddress from "../components/ShippingAddress";

 const CheckOut=()=>{
    let book=useSelector(state=>state.booksReducer.bookToBuy);
    return(
        <div>
            <ShippingAddress fromCart={false} book={book}/>
        </div>
    );
}
export default CheckOut;