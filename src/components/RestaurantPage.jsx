import RestaurantHeader1 from "./RestaurantHeader1"
import RestaurantHeader2 from "./RestaurantHeader2"
import RestaurantSection1 from "./RestaurantSection1"
import RestaurantSection2 from "./RestaurantSection2"
import Cuisines from "./Cuisines"
import FoodCity from "./FoodCity"
import GroceryCity from "./GroceryCity"
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"

export default function RestaurantPage() {

    return (
        <>
            <RestaurantHeader1></RestaurantHeader1>
            <RestaurantHeader2></RestaurantHeader2>
            <RestaurantSection1></RestaurantSection1>
            <RestaurantSection2></RestaurantSection2>
            {/* <Cuisines></Cuisines> */}
            <FoodCity></FoodCity>
            <GroceryCity></GroceryCity>
            <Footer2></Footer2>
            <Footer1></Footer1>
            
        </>
    )
}