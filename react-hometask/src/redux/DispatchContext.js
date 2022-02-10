import {useDispatch} from 'react-redux';
import actions from './actions/actionCreators'

const DispatchContext=()=>{
const dispatch=useDispatch();

const CheckOut=(id)=>{
    dispatch(actions.checkOut(id));
}
const  AddToCart=(book)=>{
    dispatch(actions.addtoCart(book));
}
const  DelFromCart=(id,book)=>{
    dispatch(actions.deleteFromCart(id,book));
}
return(
    {CheckOut,
    AddToCart,
    DelFromCart
}
    )
}
export default DispatchContext