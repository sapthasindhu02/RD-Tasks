import React from "react"
import {useSelector} from "react-redux"
import ShippingAddress from "../components/ShippingAddress";

 const CheckOut=()=>{
    let books=useSelector(state=>state.booksReducer.booksToBuy);
    console.log("here"+books);
    return(
        <div>
            <ShippingAddress fromCart={false} books={books}/>
        </div>
    );
}
export default CheckOut;