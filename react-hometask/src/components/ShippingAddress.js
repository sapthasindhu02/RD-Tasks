import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShippingAddress=()=>{
    let [address,setAddress]=useState({});
    const handleSubmit=(e)=>{
        e.preventDefault();
        <div>User Address succesfully saved</div>
    }
    
    return(
        <span>
            <h3>ShippingAddress</h3>
            <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label">First name</label>
                            <input type="text" id="form7Example1" className="form-control" onChange={event => setAddress(Object.assign(address,{myFirstName: event.target.value}))} required/>                                   
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" >Last name</label>
                            <input type="text" id="form7Example2" className="form-control" onChange={event => setAddress(Object.assign(address,{myLastName: event.target.value}))} required/>                                    
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-2">
                    <label className="form-label">Address</label>
                    <input type="text" id="form7Example4" className="form-control" onChange={event => setAddress(Object.assign(address,{myAddress: event.target.value}))} required />                                
                </div>

                <div className="form-outline mb-2">
                    <label className="form-label">Email</label>
                    <input type="email" id="form7Example5" className="form-control" onChange={event => setAddress(Object.assign(address,{myEmail: event.target.value}))} required/>
                </div>

                <div className="form-outline mb-2">
                    <label className="form-label">Phone</label>
                    <input type="number" id="form7Example6" className="form-control" onChange={event => setAddress(Object.assign(address,{myPhone: event.target.value}))} required/>
                    
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">Additional information</label>
                    <textarea className="form-control" id="form7Example7" rows="4" onChange={event => setAddress(Object.assign(address,{myAddInfo: event.target.value}))}></textarea>                                
                </div>

                <div className="form-check d-flex justify-content-between mb-2">
                    <button type="submit" value="submit" className="btn btn-info mr-1">Save Address </button>
                    <button type="button" className="btn btn-secondary">Edit Address</button>                       
                </div>
            </form>
        </span>
    );
}
export default ShippingAddress;