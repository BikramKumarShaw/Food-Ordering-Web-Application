export default function TopPickCard({ele}) {

    return(
        <>
            <div className="relative">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" + ele.creativeId} />

                <div className="absolute left-0 right-0 bottom-0 flex justify-between items-center px-4 pb-4">
                    <p className="text-white font-bold">₹{ele?.dish?.info?.defaultPrice / 100}</p>
                    <button className=" text-green-600 bg-white w-30 text-[18px] leading-5.5 font-bold py-2 rounded-xl border border-gray-400">ADD</button>
                </div>
            </div>
        
        </>
    )
}