import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice.js";

const Cart=()=>{
    const cartItems=useSelector((store) => store.cart.items);
    
    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    

    return (<div className="text-center m-10 p-10">
        <h6 className="font-bold ">Cart</h6>
        <div className="w-6/12 my-4 m-auto">
                    {cartItems.length!=0 && (<button className="p-2 m-2 bg-black text-white rounded-lg" onClick={()=>{handleClearCart()}}>Clear Cart</button>)}
                    {cartItems.length==0 && (<h1>cart is empty add some items to the cart.</h1>)}
                    {cartItems.map((item, index) => (
                        <div key={index} className="p-2 m-2 border-gray-200 border-b-2">
                            <div className="flex justify-between">
                                <span>{item.itemName}</span>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
    </div>);
};
export default Cart;
