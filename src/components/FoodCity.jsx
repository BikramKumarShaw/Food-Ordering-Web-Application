import { banners } from "../Utils/FoodData"
import FoodCityCard from "./FoodCityCard"

export default function FoodCity() {

    return(
        <div className="w-[70%] mx-auto mt-20">
            <h1 className="text-2xl font-bold leading-6.5 tracking-[-0.6px] text-[rgba(2,6,12,0.92)]">Cities with food delivery</h1>

            <div className="grid grid-cols-4 h-[38vh] overflow-y-scroll gap-4 mt-3">
                {banners[0].categories.map((ele) => ( <FoodCityCard key={ele.text} data={ele}></FoodCityCard>))}
            </div>
        </div>
    )
}