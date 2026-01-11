import { Link } from "react-router"

export default function Header() {

    return (
            <header className="bg-[#ff5200] font-serif pb-5">

                <nav>
                    <div className="flex justify-between items-center w-[80%] mx-auto py-8">
                        <div>
                            <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="Logo" />
                        </div>

                        <div className="flex items-center gap-8 text-white font-bold">
                            <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                            <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
                            <a href="" target="_blank" className="px-4 py-3 border border-white rounded-2xl">Get the App</a>
                            <a href="" target="_blank" className="px-4 py-3 border border-black rounded-2xl bg-black text-white">Sign in</a>
                        </div>
                    </div>  
                </nav>

                <div className="relative">

                    <img className="max-h-112.5 max-w-62.5 absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />

                    <div className="max-w-[60%] flex flex-col items-center gap-6 mx-auto pt-16 pb-8">
                       
                            <div className="text-5xl text-white leading-14 pl-3 text-center font-bold">Order food & groceries. Discover best restaurants. Swiggy it!
                            </div>

                            <div className="flex gap-4 justify-center w-full">
                                <input type="text" placeholder="Enter your delivery location" className="bg-white w-[40%] rounded-2xl px-4 h-12"/>
                                <input type="text" placeholder="Search for restaurant, item or more" className="bg-white w-[60%] rounded-2xl px-4 h-12 font-bold"/>
                            </div>
                       
                    </div>

                    <img className="max-h-112.5 max-w-62.5 absolute right-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"  />

                </div>

                <div className="w-[80%] mx-auto pb-2 py-5 flex ">
                    <Link to='/restaurant' ><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" /></Link>
                    <Link href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" ><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" /></Link>
                    <Link href="https://www.swiggy.com/dineout" ><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" /></Link>
                </div>

                <div className=" w-[80%] mx-auto h-4 bg-white"></div>

            </header>
    )
}