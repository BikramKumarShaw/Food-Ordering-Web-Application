import { banners } from "../Utils/FoodData"
import GroceryCityCard from "./GroceryCityCard"

export default function GroceryCity() {

    return (
        <div className="w-[70%] mx-auto my-16">
                <h1 className="text-2xl font-bold leading-6.5 tracking-[-0.6px] text-[rgba(2,6,12,0.92)]">Cities with grocery delivery</h1>
    
                <div className="grid grid-cols-4 h-[38vh] overflow-y-scroll gap-4 mt-3">
                    {banners[1].categories.map((ele) => ( <GroceryCityCard key={ele.text} data={ele}></GroceryCityCard>))}
                </div>
            </div>
        )
}