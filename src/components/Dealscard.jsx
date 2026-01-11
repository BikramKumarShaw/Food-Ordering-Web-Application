export default function dealscard({data}) {

    return(
        <>
            <div className="w-82 rounded-[20px] p-3 border border-gray-300 flex gap-3 items-center">

                {data.header.includes('OFF') && <img className="w-12 h-12 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/DealRush_Offer_Icon.png" width="48" height="48" alt="Items At ₹59" />}
                {!(data.header.includes('OFF')) && <img className="w-12 h-12 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic" width="48" height="48" alt="Flat ₹125 Off" />}
                
                <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-bold leading-5.5">{data.header}</p>
                    <p className="text-[14px]  leading-4.5 font-bold text-[rgba(2,6,12,0.45)]">{data.description}</p>
                </div>
            </div>
        </>
    )
}