import { useEffect, useState } from "react"
import ChainCard from "./ChainCard";
import Shimmer from "./Shimmer";
import { restaurantdata } from "../Utils/RestaurantFoodData";


export default function RestaurantSection1() {

    const [data, setData] = useState([]);

    
    useEffect(() => {
            async function fetchData() {

                try {
                    const response = await fetch("https://cors-anywhere.herokuapp.com/" + "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.5643&lng=88.3693&carousel=true&third_party_vendor=1");
                    
                    if (!response.ok) {
                        throw new Error("API failed");
                    }

                    const data = await response.json();
                    setData(data.data.cards?.[1].card.card.gridElements.infoWithStyle.restaurants);
                }
                catch(e) {
                    setData(restaurantdata.data.cards?.[1].card.card.gridElements.infoWithStyle.restaurants)
                }
            }     
            fetchData();
            
        }, [])

    return (
        <>

        <div className="h-px bg-gray-300 my-8 w-[80%] mx-auto"></div>
        
        <div className="w-[80%] mx-auto p-4">
            
            <h1 className="mb-4 text-2xl font-bold ">Top restaurant chains in Kolkata</h1>
        
            {data.length == 0 && <Shimmer />}
            <div style={{ scrollbarWidth: "none" }} className="grid grid-rows-1 grid-flow-col auto-cols-max overflow-x-auto gap-8">
                {data.map((ele) => (<ChainCard key={ele.info.id} ele={ele}></ChainCard>))}
            </div>
            
        </div>
          
          <div className="h-px bg-gray-300 mt-8 mb-4 w-[80%] mx-auto"></div>
        </>
    )
}