import { addItems, quantityIncrease, quantityDecrease } from "../Stored/CartSlice";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";

export default function FoodCategoryCard ({data}) {

    const dispatch = useDispatch();

    const orderCart = useSelector((initialState) => initialState.CartSliceName.orderCart)
    const element = orderCart.find((ele) => ele.id === data.id);
    const count = element ? element.quantity : 0;
    
    function handleAddItems() {
        dispatch(addItems(data))       
    }
   
    function handlequantityIncreace() {
        dispatch(quantityIncrease(data))
    }

    function handlequantityDecrease() {
        dispatch(quantityDecrease(data))
    }

    return (
        <>
        <div className="flex justify-between gap-1 border-b border-gray-400 mb-5 pb-5">
            <div className="w-[70%] py-1">
                <p className="text-[18px] leading-5.5 text-[rgba(2,6,12,0.75)] font-bold">{data.name}</p>
                <p className="font-semibold">₹{data.defaultPrice ? (data.defaultPrice/ 100) : Math.round(data.price/100)}</p>

                <div className="flex items-center my-3">

                    {data?.ratings?.aggregatedRating.rating && 
                    <>
                    <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" fillcolor="#116649"><rect width="14" height="14" fill="white"></rect><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#116649"></path></svg></span>
                    <p><span className="text-[rgb(17,102,73)] font-semibold">{data?.ratings?.aggregatedRating?.rating}</span><span className="text-[rgba(2,6,12,0.75)]">{"(" + data.ratings?.aggregatedRating?.ratingCountV2 + ")"}</span></p>    
                    </>}
                </div>

                <p className="text-[rgba(2,6,12,0.75)] h-12 overflow-y-auto ">{data.description}</p>
            </div>

            <div className="h-50 relative rounded-2xl overflow-hidden">
                <img className="w-39 h-36 rounded-2xl object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + data.imageId}/>

                <div className="absolute left-[12%] right-[12%] top-[60%] flex flex-col items-center">
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
                    <p className="text-[13px] text-[rgba(2,6,12,0.5)] font-semibold">Customisable</p>
                </div>
                
            </div>
        </div>
        </>
    )
}