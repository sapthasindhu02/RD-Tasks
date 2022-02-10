import React from "react"
import {useSelector} from "react-redux"
import DispatchContext from "../redux/DispatchContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Details=()=>{
    const navigate=useNavigate();
    let book=useSelector(state=>state.booksReducer.currentBook);

    const  buyNow=(e,book)=>{
        e.preventDefault();
        DispatchContext.CheckOut(book);
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
                    <p><b>Book Price: </b>{book.author}</p>
                    <p><b>Author Name: </b>{book.author}</p>
                    <p><b>Page Count: </b>{book.pages}</p>
                    <p><b>ISBN: </b>{book.isbn}</p>
                    <button className="btn btn-success mr-2" onClick={()=>DispatchContext.AddToCart(book)}>Add to cart</button>
                    <button  onClick={(e)=>buyNow(e,book)} className="btn btn-primary" >Buy Now</button>
                    <div className="description">
                        <h3>{book.description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;