import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import actionCreators from '../redux/actions/actionCreators'

const Product=(props)=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const ShowThisBook=(book)=>{
        console.log("curr"+book);
        dispatch(actionCreators.updateCurrentBook(book));
        navigate(`/product/${props.product.isbn}`);
    }
    const CheckOut=(e,book)=>{
        e.preventDefault();
        dispatch(actionCreators.checkOut(book,true));
        navigate(`/checkout`);
    }
    return(
        <div className='card' >
           <Link to={`/product/${props.product.isbn}`}  onClick={() =>ShowThisBook(props.product)}>
             
               <img className="card-img-top " src={props.product.thumbnailUrl} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.description}</p>
                </div>
            </Link>
            <div className=" card-footer bg-transparent text-center ">
                <Link to="/checkout" onClick={(e) =>CheckOut(e,props.product)}>
                    <button className="btn buy-btn btn-primary" >Buy Now</button>
                </Link>                        
            </div>
        </div>
    );
}
export default Product;