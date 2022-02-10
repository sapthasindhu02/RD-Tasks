import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';

const  Header=()=>{
        const currentLocation=useLocation().pathname;
        let currentBookTitle=useSelector(state=>state.booksReducer.currentBook.title);
        console.log("state is "+JSON.stringify(currentBookTitle));
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
            case `/${currentBookTitle}`:
                currentPageName=`| ${currentBookTitle}`;
                break;
            default:{
                currentPageName='';
            }
        }

        return (
            <div className='header'>
                <h4>{`eCommerce Site ${currentPageName}`}</h4>
                <ul className='nav justify-content-end pt-4'>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/myOrders">My orders</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        )
    
}

export default Header;