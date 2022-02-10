import React from 'react';
import {useSelector} from "react-redux"
import DispatchContext from "../redux/DispatchContext"
import PaymentInfo from "./PaymentInfo"
import 'bootstrap/dist/css/bootstrap.min.css';

const ShoppingBag=(props)=>{
    let cart=useSelector(state=>state.booksReducer.cart);
    let totalPrice=0;

    let displayItems=(book)=>{
        totalPrice+=book.price;
        return(
        <div className="row" key={book.isbn}>
            <div className='col-3'>
                <img src={book.thumbnailUrl} alt=""/> 
            </div>
            <div className="col-9">
                <div className='card'>
                    <h2 className="card-title">{book.title}</h2>
                    <span className="card-text">Price: ₹{book.price}</span>
                    <button className="btn btn-danger" onClick={() =>DispatchContext.DelFromCart(book.isbn)}>Delete</button>                            
                </div>
            </div>
        </div>
    )
    }

    return(
        <div>
            <h3>ShoppingBag</h3>
            {     
                props.fromCart?(cart.map(item =>displayItems(item))):displayItems(props.book)
            }
            <PaymentInfo totalPrice={totalPrice}/>
        </div>
    )
}
export default ShoppingBag;