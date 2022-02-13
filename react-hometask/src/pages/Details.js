import React, { useState } from "react"
import {useSelector} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import actions from '../redux/actions/actionCreators'

const Details=()=>{
const dispatch=useDispatch();
    let[addedToCart,setAddStatus]=useState('');
    const navigate=useNavigate();
    let book=useSelector(state=>state.booksReducer.currentBook);
    
    const  AddToCart=(e,book)=>{
       e.preventDefault();
        dispatch(actions.addtoCart(book));
        setAddStatus('Item added to Cart')
    }

    const  buyNow=(e,book)=>{
        e.preventDefault();
        console.log("entered")
        console.log("arey"+JSON.stringify(book));
    dispatch(actions.checkOut(book,true));
    // DispatchContext.CheckOut(book);
        navigate('/checkout');
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <img src={book.thumbnailUrl} alt=""/>
                </div>
                <div className="col-9">
                    <p className="bookTitle"><b>Book Title </b>{book.title}</p>
                <p><b>Book Price: </b>${book.pageCount}</p>
                    <p><b>Author Name: </b>{book.authors}</p>
                    <p><b>Page Count: </b>{book.pageCount}</p>
                    <p><b>ISBN: </b>{book.isbn}</p>
                    <button className="btn btn-success m-2" onClick={e=>AddToCart(e,book)}>Add to cart</button>
                    <button  onClick={(e)=>buyNow(e,book)} className="btn m-2 btn-primary" >Buy Now</button>
                    <div className="description">
                        <h3>{book.description}</h3>
                    </div>
                </div>
                {(addedToCart!='')?<h5>Item added to Cart</h5>:<h5></h5>}
            </div>
        </div>
    );
}

export default Details;