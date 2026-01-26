import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { Link } from "react-router"
import { menuData } from "../Utils/RestaurantFoodData";
import RestaurantHeader1 from "./RestaurantHeader1"
import Tabs from "./Tabs";
import Menucard from "./Menucard";
import Deals from "./Deals";
// import TopPick from "./TopPick";

export default function RestaurantMenu () {

    const {id} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {

            try {
                const response = await fetch("https://cors-anywhere.herokuapp.com/" + `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
                
                if (!response.ok) {
                    throw new Error("API failed");
                }

                const data = await response.json();
                setData(data);
            }
            catch(e) {
                setData(menuData);
            }
        }     
        fetchData();
        
    }, [])

    console.log(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        
    return (
        <>
            <RestaurantHeader1></RestaurantHeader1>

            <div className="w-200 mx-auto mt-13 mb-6">              
                <div className="text-[10px] font-semibold text-[rgba(2,6,12,.5)]">Home / {data?.data?.cards?.[2]?.card?.card?.info?.city} / {data?.data?.cards?.[2]?.card?.card?.info?.name}</div>

                <p className="ml-4 text-[1.8em] font-bold my-[1em] leading-5.5">{data?.data?.cards?.[2]?.card?.card?.info?.name}</p>

                <div className="flex gap-5 pl-4 border-b border-gray-300">
                    {data?.data?.cards?.[1]?.card?.card?.tabs.map((items) => (<Tabs key={items.id} title={items.title}></Tabs>))}
                </div>

            </div>

            <div className="w-200 mx-auto px-4 pb-4 rounded-b-[36px] bg-[linear-gradient(rgb(255,255,255)_-6.71%,rgb(235,235,242)_56.19%,rgb(223,223,231)_106.56%)]">

                <div className="rounded-[20px] bg-white shadow-[0px_8px_16px_0px_rgba(0,0,0,0.04)] border border-[rgba(2,6,12,0.15)]">
                    
                    <div className="m-4 flex flex-col gap-4 ">
                        <div className="flex font-bold gap-1 items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                            <p>{data?.data?.cards?.[2]?.card.card.info.avgRating}{"(" + data?.data?.cards?.[2]?.card.card.info.totalRatingsString + ")"}</p>
                            <span className="text-gray-400">•</span>
                            <p>{data?.data?.cards?.[2]?.card.card.info.costForTwoMessage}</p>
                        </div>
                        
                        <div className="mx-1 text-[rgb(255,82,0)] font-bold underline -mt-1">{data?.data?.cards?.[2]?.card.card.info.cuisines.join(", ")}</div>
                        
                        <div className="flex mx-1 py-1 items-center">

                            <div className="flex flex-col items-center">
                                <div className="w-1.75 h-1.75 bg-gray-300 rounded "></div>
                                <div className="h-5.75 w-px bg-gray-300"></div>
                                <div className="w-1.75 h-1.75 bg-gray-300 rounded "></div>
                            </div>

                            <div className="flex flex-col ml-3 gap-1">
                                <div className="flex gap-2 text-[14px] leading-4.5">
                                    <p className="font-bold">Outlet</p>
                                    <p>Elgin Road</p>
                                </div>
                                <p className="font-bold">40-50 mins</p>
                            </div>
                        </div>
                    </div>

                </div>

            </ div>

            {data.length != 0 && <Deals key={data?.data?.cards?.[3]?.card?.card?.id} data={data?.data?.cards?.[3]?.card.card.gridElements?.infoWithStyle?.offers}></Deals>}

            <div className="w-200 mx-auto font-bold text-center pt-8 pb-4 text-gray-600">
                <p>{"<--"} MENU {"-->"}</p>
            </div>

            <Link state={{items: data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []}} to='/searchitem' className="h-12 w-200 mx-auto flex flex-col items-center">
                <p className="h-full w-full text-center leading-11 rounded-xl bg-gray-200 text-gray-600 font-bold cursor-pointer">Search for dishes</p>
            </Link>

            {data.length != 0 && <Menucard data={data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards}></Menucard>}
        </>
    )
}


