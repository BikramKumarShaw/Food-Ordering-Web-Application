import { useEffect, useState } from "react"
import RestaurantDeliveryCard from "./RestaurantDeliveryCard";
import Shimmer from "./Shimmer";
import {restaurantdata} from "../Utils/RestaurantFoodData"

export default function RestaurantSection2() {

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
        <div className="w-[80%] mx-auto p-4">
              <h1 className="mb-4 text-2xl font-bold ">Restaurants with online food delivery in Kolkata</h1>
        
              {data.length == 0 && <Shimmer />}
              <div
                style={{ scrollbarWidth: "none" }}
                className="grid grid-cols-4 my-10 gap-8"
              >
                {data.map((ele) => (
                  <RestaurantDeliveryCard key={ele.info.id} ele={ele}></RestaurantDeliveryCard>
                ))}
              </div>
            </div>
          
        </>
    )
}