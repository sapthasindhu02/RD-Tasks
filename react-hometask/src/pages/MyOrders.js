import React from "react"
import {useSelector} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';

const MyOrders=()=>{
    let products=useSelector(state=>state.booksReducer.products);

    let displayOrder=(book)=>{
        return(
            <div className="row" key={book.id}>
                <div className="card">
                    <div className="card-header">
                        <p>`Order placed ${book.OrderedDate}`</p>
                        <p className="float-right">Status: Delivered</p>
                    </div>
                    <div className="card-body order-body">                       
                        <img className="orders-img" src={book.thumbnailUrl} alt=""/>                                        
                        <div className="row order-row">
                            <h2 className="card-title order-title">{book.title}</h2>
                            <p className="card-subtitle">{book.author}</p>
                            <span className="card-text">Price: ₹{book.pages}</span>
                        </div>      
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="container-fluid">
            {products.map(book=>(book.status)?displayOrder(book):<span></span>)}
        </div>
    );
}
export default MyOrders;