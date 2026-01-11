export default function Footer2() {

    return (
        <div className="bg-[rgb(240,240,245)]">
            <div className="w-[90%] mx-auto h-px bg-[rgba(2,6,12,0.45)]"></div>

            <div className="flex gap-8 py-8 justify-center items-center">
                <span className="text-[24px] font-bold text-[rgba(2,6,12,0.6)] leading-6.5">For better experience, download the Swiggy app now</span>
                <div className="flex gap-6">
                    <img className="h-16.25 w-50" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" />
                    <img className="h-16.25 w-50" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" height="65" />
                </div>
            </div>

        </div>
    )
}