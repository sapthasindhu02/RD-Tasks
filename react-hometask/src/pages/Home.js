import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Product from '../components/Product';
import actionCreators from '../redux/actions/actionCreators'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home=()=>{
    const dispatch=useDispatch();
    let [visible,setVisible]=useState(10);

    
    useEffect(()=>{
        dispatch(actionCreators.fetchData());
    },[])

    const state=useSelector((state)=>state);
    const products=state.booksReducer.products;
    const totalBooks=products.length;
    return(
        <div className="container">
            <div className='row'>
           { 
           products.slice(0,visible).map(product=>{
               return(<div className='col-3'>
               <Product key={product.isbn} product={product}/>
            </div>)
               
           })
           }
           </div>
            {visible<totalBooks
             && 
            <button onClick={()=>setVisible(visible+10)} type="button" className="show-more">Show More</button>
            }
        </div>
    );
}
export default Home;