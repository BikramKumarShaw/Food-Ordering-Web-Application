import { useState } from "react";
import FoodCategory from "./FoodCategory";
import TopPick from "./TopPick";

export default function Menucard({data}) {

    const [selected, setSelected] = useState(null);

    const filterData = data.filter((items) => ('title' in items?.card?.card && !('carousel' in items?.card?.card)));

    return (

        <>
        <div className="w-200 mx-auto m-5 min-h-9 flex items-center gap-2 text-gray-600">
            <p className={`px-2 py-3 rounded-[18px] border text-[14px] font-semibold leading-4.5 w-20 text-center cursor-pointer ${selected === 'veg' && "bg-green-500"}`} onClick={() => {setSelected(selected === 'veg' ? null : 'veg')}}>Veg</p>
            <p className={`px-2 py-3 rounded-[18px] border text-[14px] font-semibold leading-4.5 w-20 text-center cursor-pointer ${selected === 'nonveg' && "bg-red-500"}`} onClick={() => {setSelected(selected === 'nonveg' ? null : 'nonveg')}}>Non-Veg</p>
        </div>
        <div className="w-200 mx-auto my-6 h-[0.5px] bg-gray-300"></div> 

        <TopPick data={data?.[1]?.card?.card}></TopPick>

        <div className="w-200 mx-auto">
            {filterData.map((item) => <FoodCategory key={item?.card?.card?.title} data={item.card.card} />)}
        </div>
        </>
    )
}