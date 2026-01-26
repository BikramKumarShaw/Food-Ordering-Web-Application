import { addItems, quantityIncrease, quantityDecrease } from "../Stored/CartSlice";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";

export default function TopPickCard({ele}) {

    const dispatch = useDispatch();

    const orderCart = useSelector((initialState) => initialState.CartSliceName.orderCart)
    const element = orderCart.find((item) => item.id === ele.dish.info.id);
    const count = element ? element.quantity : 0;
    
    function handleAddItems() {
        dispatch(addItems(ele.dish.info))       
    }
   
    function handlequantityIncreace() {
        dispatch(quantityIncrease(ele.dish.info))
    }

    function handlequantityDecrease() {
        dispatch(quantityDecrease(ele.dish.info))
    }

    return(
        <>
            <div className="relative">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" + ele.creativeId} />

                <div className="absolute left-0 right-0 bottom-0 flex justify-between items-center px-4 pb-4">
                    <p className="text-white font-bold">₹{ele?.dish?.info?.defaultPrice / 100}</p>
                    {count == 0 ? 
                    (<button className=" text-green-600 bg-white w-30 text-[18px] leading-5.5 font-bold py-2 rounded-xl border border-gray-400 cursor-pointer" onClick={()=> handleAddItems()}>ADD</button>
                    ) 
                    :
                    (<button className=" text-green-600 bg-white w-30 text-[18px] leading-5.5 font-bold py-2 rounded-xl border border-gray-400 flex justify-between overflow-hidden">
                        <span className="w-[30%] cursor-pointer border-r hover:bg-gray-200" onClick={()=> handlequantityDecrease()}>-</span>
                        <span className="w-[30%]">{count}</span>
                        <span className="w-[30%] cursor-pointer border-l hover:bg-gray-200" onClick={()=> handlequantityIncreace()}>+</span></button>
                    )
                    }

                </div>
            </div>
        
        </>
    )
}