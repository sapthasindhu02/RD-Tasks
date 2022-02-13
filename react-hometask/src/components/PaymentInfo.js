import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions/actionCreators';
import 'bootstrap/dist/css/bootstrap.min.css';


const PaymentInfo=(props)=>{
    const navigate=useNavigate();
    const address=useSelector(state=>state.booksReducer.address);
    let tax=(props.totalPrice==0?0:7.50);
    let ShipCharge=(props.totalPrice==0?0:5);
    const dispatch=useDispatch();
    const checkOutFromCart=(e)=>{
        if(address){
        dispatch(actions.Orderconfirmed(props.fromCart))
        navigate('/myorders');
        }
    }
    return(
        <div>

            <ul className="list-group list-group-flush">
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Items Price:
                                <span>${props.totalPrice}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                Tax
                                <span>{tax}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping Charges
                                <span>{ShipCharge}</span>
                            </li>
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                <strong>Total</strong>
                                </div>
                                <span><strong>${Number.parseInt(props.totalPrice) + Number.parseInt(tax) + Number.parseInt(ShipCharge)}</strong></span>
                            </li>
                            </ul>
                            {(tax!=0)?<button type="button" className="btn m-2 btn-primary btn-block " onClick={(e)=>checkOutFromCart(e)}>
                                Checkout
                            </button>:<span></span>}
                            <button type="button" className="btn m-2 btn-primary btn-block" onClick={()=>navigate('/home')}>
                                Cancel
                            </button>
        </div>
    );
}
export default PaymentInfo