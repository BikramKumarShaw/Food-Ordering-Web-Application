import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  return (
    <div className="w-[80%] mx-auto mt-28">
      <h1 className="mb-8 text-2xl font-bold ">Order our best food options</h1>

      <div
        style={{ scrollbarWidth: "none" }}
        className="grid grid-rows-2 grid-flow-col auto-cols-max overflow-x-auto gap-x-3.5"
      >
        {imageGridCards.map((data) => (
          <FoodCard key={data.id} data={data}></FoodCard>
        ))}
      </div>
    </div>
  );
}
