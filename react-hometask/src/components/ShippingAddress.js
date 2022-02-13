import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux"
import {useDispatch} from 'react-redux';
import actions from '../redux/actions/actionCreators'
import { useNavigate } from "react-router-dom";


const ShippingAddress=(props)=>{
    let savedAddress=useSelector(state=>state.booksReducer.address);
    let cart=useSelector(state=>state.booksReducer.cart);
    let booksToBuy=useSelector(state=>state.booksReducer.booksToBuy);
    console.log("saved"+typeof savedAddress);
const dispatch=useDispatch();
const navigate=useNavigate();
   let [address,setAddress]=useState(savedAddress);
   let [orderConfirm,setStatus]=useState('')
   
    const Confirm_Order=(e)=>{
        e.preventDefault();
        console.log("saddress entered"+JSON.stringify(address));
        setStatus('Order Confirmed');
        dispatch(actions.Orderconfirmed(address,props.fromCart));
        navigate('/myOrders');
        
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("saddress entered"+JSON.stringify(address));
        setStatus('Address Saved');
        dispatch(actions.saveAddress(address));

    }
    if(savedAddress){
        return(<span> 
            <h3>ShippingAddress</h3>
            <h5>Deliver to:{savedAddress.fname} {savedAddress.lname}</h5>
            <h5>Address:{savedAddress.address}</h5>
            <h5>phone:{savedAddress.phone}</h5>
           {(!cart[0] && !booksToBuy[0])?<span></span>: <button  value="submit" className="btn btn-info mr-1" onClick={e=>Confirm_Order(e)}>Confirm Order </button> }                             
         

        </span>);
    }
    else return(
        <span>
            <h3>ShippingAddress</h3>
            
            <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label">First name</label>
                            <input type="text" id="form7Example1" className="form-control" onChange={event => {setAddress(Object.assign({},address,{fname: event.target.value}))}}  required/>                                   
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" >Last name</label>
                            <input type="text" id="form7Example2" className="form-control" onChange={event => {setAddress(Object.assign({},address,{lname: event.target.value}))}} required/>                                    
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-2">
                    <label className="form-label">Address</label>
                    <input type="text" id="form7Example4" className="form-control" onChange={event => {setAddress(Object.assign({},address,{address: event.target.value}))}} required />                                
                </div>

                <div className="form-outline mb-2">
                    <label className="form-label">Email</label>
                    <input type="email" id="form7Example5" className="form-control" onChange={event => {setAddress(Object.assign({},address,{email: event.target.value}))}} required/>
                </div>

                <div className="form-outline mb-2">
                    <label className="form-label">Phone</label>
                    <input type="number" id="form7Example6" className="form-control" onChange={event => {setAddress(Object.assign({},address,{phone: event.target.value}))}} required/>
                    
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">Additional information</label>
                    <textarea className="form-control" id="form7Example7" rows="4" onChange={event => {setAddress(Object.assign({},address,{info: event.target.value}))}}></textarea>                                
                </div>

                <div className="form-check d-flex justify-content-between mb-2">
                    <button type="submit" value="submit" className="btn btn-info mr-1">Save Address </button>                                 
                </div>

            </form>
            {
            
            (orderConfirm!='')?<h4>status :{orderConfirm}</h4>   :<h4></h4>
}
        </span>
    );
}
export default ShippingAddress;