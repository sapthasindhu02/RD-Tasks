import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import actionCreators from '../redux/actions/actionCreators'

const Product=(props)=>{
    const dispatch=useDispatch();
    const ShowThisBook=(book)=>{
        dispatch(actionCreators.updateCurrentBook(book));
    }
    const CheckOut=(book)=>{
        dispatch(actionCreators.checkOut(book));
    }
    return(
        <div className='card' >
            <Link to={`/product/${props.product.isbn}`}>
                <img className="card-img-top " src={props.product.thumbnailUrl} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.description}</p>
                </div>
            </Link>
            <div className=" card-footer bg-transparent text-center ">
                <Link to="/checkout" onClick={() =>CheckOut(props.product.isbn)}>
                    <button className="btn buy-btn btn-primary" >Buy Now</button>
                </Link>                        
            </div>
        </div>
    );
}
export default Product;