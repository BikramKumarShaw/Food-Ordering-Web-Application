import {imageGridCards2} from "../Utils/FoodData"
import GroceryCard from "./GroceryCard"

export default function Grocery() {

    return (
        <div className="w-[80%] mx-auto mt-28">
        
            <h1 className="mb-8 text-2xl font-bold ">Shop groceries on Instamart</h1>

            <div style={{scrollbarWidth:"none"}} className="grid grid-rows-1 grid-flow-col auto-cols-min overflow-x-auto gap-x-10">
                {
                    imageGridCards2.map((data) => <GroceryCard key={data.id} data={data}></GroceryCard>)
                }
            </div>
        </div>
    )
}