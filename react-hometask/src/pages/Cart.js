import React from "react"
import ShippingAddress from "../components/ShippingAddress.js"
import ShoppingBag from "../components/ShoppingBag.js"
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <ShippingAddress/>
                </div>
                <div className="col-6">
                    <ShoppingBag fromCart={true}/>
                </div>
            </div>
        </div>
    );
}
export default Cart;