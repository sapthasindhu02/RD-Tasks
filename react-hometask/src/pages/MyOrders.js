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
                        <p className="float-right">Status: Delivered</p>
                    </div>
                    <div className="card-body order-body">                       
                        <img className="orders-img" src={book.thumbnailUrl} alt=""/>                                        
                        <div className="row order-row">
                            <h2 className="card-title order-title">{book.title}</h2>
                            <p className="card-subtitle">{book.author}</p>
                            <span className="card-text">Price: ${book.pageCount}</span>
                        </div>      
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="container-fluid">
            <h3>My Orders</h3>
            {products.map(book=>(book.status=='DELIVERED')?displayOrder(book):<span></span>)}
        </div>
    );
}
export default MyOrders;