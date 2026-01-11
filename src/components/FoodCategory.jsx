import { useState } from "react"
import FoodCategoryCard from "./FoodCategoryCard"

export default function FoodCategory ({data}) {

    const [isOpen, setIsOpen] = useState(true);

    if ('categories' in data) {

        return (
            <> 
                <div className="flex justify-between p-4">
                    <p className="font-bold text-[1.15rem] mb-6">{data.title}</p>
                    {/* {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"/></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>} */}
                </div>
                {isOpen && data.categories.map((item) => <FoodCategory key={item.title} data={item} />)}
            </>
        )
    }

    
    return (
        <div className=" w-200 mx-auto flex flex-col gap-4">
            <div className="p-4">

                <div className="flex justify-between" onClick={() => setIsOpen(!isOpen)}>
                    <p className="font-bold text-[1.15rem] mb-6">{data.title} {"(" + data?.itemCards?.length + ")"}</p>
                    {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"/></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>}
                </div>
                
                {
                isOpen && data.itemCards?.map((item) => <FoodCategoryCard key={item?.card?.info?.id} data={item?.card?.info} />)
                }
            
            </div>

            <div className="h-4 bg-[rgba(2,6,12,0.05)]"></div>
        </div>
    )
}