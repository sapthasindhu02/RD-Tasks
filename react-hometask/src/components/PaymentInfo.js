import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentInfo=(props)=>{
    const navigate=useNavigate();

    return(
        <div>
            <ul className="list-group list-group-flush">
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Items Price:
                                <span>₹{props.totalPrice}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                Tax
                                <span>₹{7.50}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping Charges
                                <span>₹{5}</span>
                            </li>
                            <li
                                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                <strong>Total</strong>
                                </div>
                                <span><strong>₹{Number.parseInt(props.totalPrice) + Number.parseInt(7.50) + Number.parseInt(5)}</strong></span>
                            </li>
                            </ul>
                            <button type="button" className="btn btn-primary btn-lg btn-block">
                                Checkout
                            </button>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>navigate('/home')}>
                                Cancel
                            </button>
        </div>
    );
}
export default PaymentInfo