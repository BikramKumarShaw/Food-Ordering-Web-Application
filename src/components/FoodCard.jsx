import { Link } from "react-router";

export default function FoodCard({data}) {
     return (
        <>  
            <Link to="/comingsoon" target="_blank">
            {/* href={data.action.link} */}
                <img className="min-w-36 h-45 object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + data.imageId} />
            </Link>
            
        </>
     )
}