import { useEffect, useState } from "react";
import CuisinesCard from "./CuisinesCard";

export default function Cuisines() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://cors-anywhere.herokuapp.com/" + "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.5643&lng=88.3693&carousel=true&third_party_vendor=1");
            const data = await response.json();
            setData(data);
        }     
        fetchData();
    }, [])

    console.log(data)

    return (
        <div className="w-[70%] mx-auto my-16">
            <h1 className="text-2xl font-bold leading-6.5 tracking-[-0.6px] text-[rgba(2,6,12,0.92)]">Cities with grocery delivery</h1>

            <div className="grid grid-cols-4 h-[38vh] overflow-y-scroll gap-4 mt-3">
                {/* {banners[1].categories.map((ele) => ( <CuisinesCard key={ele.text} data={ele}></CuisinesCard>))} */}
            </div>
        </div>
    )
}