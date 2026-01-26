import RestaurantHeader1 from "./RestaurantHeader1"
import FoodCategoryCard from "./FoodCategoryCard"
import { useState } from "react"
import { useLocation } from "react-router"

export default function SearchDish() {

    const [searchInput, setSearchInput] = useState("")

    const location = useLocation();

    const filterData1 = location.state.items.filter((ele) => "itemCards" in ele.card.card);

    const filterData = [];

    filterData1.map((item) => {
        item.card.card.itemCards.map((ele) => {
            const name = ele.card.info.name.toLowerCase();
            if (name.includes(searchInput.toLowerCase().trim())) {
                filterData.push(ele.card.info);
            }
            })
    })
    
    return(
        <>
        <RestaurantHeader1 />
        <div className="w-200 mx-auto mt-13 mb-6">
            <input type="text" className="h-full w-full leading-11 p-3 font-semibold border-b border-gray-200 outline-none mb-5" placeholder="Search for dishes" onChange={(e) => setSearchInput(e.target.value)} />

            {searchInput && filterData.map((item) => <FoodCategoryCard data={item} />)}
        </div>
        </>
    )
}