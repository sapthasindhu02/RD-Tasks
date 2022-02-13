import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';

const  Header=()=>{
        const currentLocation=useLocation().pathname;
        let currentBookID=useSelector(state=>state.booksReducer.currentBook.isbn) || 'none';
        let currentPageName;

        switch(currentLocation){
            case '/home':
                currentPageName='';
                break;
            case '/myOrders':
                currentPageName='| My Orders';
                break;
            case '/cart':
                currentPageName='| Cart';
                break;
            case `/product/${currentBookID}`:
                currentPageName=`| ${currentBookID}`;
                break;
            default:{
                currentPageName='';
            }
        }

        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

              <h2 class="navbar-brand">{`E-commerce Site ${currentPageName}`}</h2>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                
                  <a class="nav-link" href="#"><Link to="/home">Home</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><Link to="/myOrders">My orders</Link></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#"><Link to="/cart">Cart</Link></a>
                </li>
              </ul>
          </nav>
        
        )
    
}

export default Header;