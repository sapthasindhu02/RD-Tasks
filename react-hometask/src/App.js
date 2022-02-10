import React, { Fragment } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import MyOrders from './pages/MyOrders'
import Details from './pages/Details'
import CheckOut from './pages/CheckOut'
import Home from './pages/Home';
class App extends React.Component{
 
  render(){
    return(
          <BrowserRouter>
            <div>
              <Header />
            </div>
            <Routes>
              <Route exact path="/home" element={<Home/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/myOrders" element={<MyOrders/>}/>
              <Route exact path="/product/:id" element={<Details/>}/>
              <Route exact path="/checkout" element={<CheckOut/>}/>
              <Route exact path="/" component={<Home/>}/>
            </Routes>
          </BrowserRouter>
    );
  }
}

export default App;
