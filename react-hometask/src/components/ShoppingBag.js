import React from 'react';
import {useSelector} from "react-redux"
import DispatchContext from "../redux/DispatchContext"
import {useDispatch} from 'react-redux';
import PaymentInfo from "./PaymentInfo"
import { useNavigate } from "react-router-dom";
import actions from '../redux/actions/actionCreators'
import 'bootstrap/dist/css/bootstrap.min.css';

const ShoppingBag=(props)=>{
    let cart=useSelector(state=>state.booksReducer.cart);
    const navigate=useNavigate();
    let totalPrice=0;
    const dispatch=useDispatch();

    const  DelFromCart=(id)=>{
        console.log("entered");
        dispatch(actions.deleteFromCart(id));
        navigate('/home');

    }

    let displayItems=(book)=>{
        totalPrice+=book.pageCount;
        return(
        <div className="row m-4" key={book.isbn}>
            <div className='col-12 mb-2'>
                <img src={book.thumbnailUrl} alt=""/> 
            </div>
            <div className="col-12">
                <div className='card'>
                    <h2 className="card-title">{book.title}</h2>
                    <span className="card-text">Price: ₹{book.pageCount}</span>
                    <div className='card-footer text-center'>
                    <button className="btn btn-danger" onClick={() =>DelFromCart(book.isbn)}>Delete</button>                            

                    </div>
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
            <PaymentInfo totalPrice={totalPrice} fromCart={props.fromCart}/>
        </div>
    )
}
export default ShoppingBag;