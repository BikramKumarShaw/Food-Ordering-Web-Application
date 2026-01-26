import { Link } from "react-router"

export default function GroceryCard({data}) {

    return (
        <div className="flex flex-col text-center min-w-36 min-h-48 gap-2">
            <Link to="/comingsoon" target="_blank" >
                <img className="min-w-36 min-h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + data.imageId} />
            </Link>
            <p className="text-xl font-bold text-gray-700">{data.action.text}</p>
        </div>
    )
}

// href={data.action.link}