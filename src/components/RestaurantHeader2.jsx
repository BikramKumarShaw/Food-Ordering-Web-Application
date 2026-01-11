import {image1} from '../Utils/RestaurantFoodData' 
import FoodCard from './FoodCard'

export default function RestaurantHeader2() {

    return (
        <div className="w-[80%] mx-auto mt-5 p-4">
                    <h1 className="mb-4 text-2xl font-bold ">What's on your mind?</h1>
        
                    <div
                        style={{ scrollbarWidth: "none" }}
                        className="grid grid-rows-1 grid-flow-col auto-cols-max overflow-x-auto gap-x-6"
                    >
                        {image1.map((data) => (
                        <FoodCard key={data.id} data={data}></FoodCard>
                        ))}
                    </div>
                </div>
    )
}