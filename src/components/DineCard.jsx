export default function DineCard({ data }) {
  return (
    <div className="w-81.5 rounded-2xl overflow-hidden border border-0.5 border-gray-200">
    <a href={data.cta.link}>
      <div className="relative">
        
        <img className="w-full h-47 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + data.info.mediaFiles[0].url}/>

        <div className="absolute left-0 bottom-0 right-0 flex justify-between pt-4 pb-3 px-3 z-1 text-white bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]">
          <span className="wrap-break-word text-xl leading-6 tracking-[-0.5px] font-extrabold">
            {data.info.name}
          </span>
          <span className="flex items-center text-[16px] leading-5.25 tracking-[-0.4px] font-bold  gap-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8.00005"
                cy="7.99999"
                r="7.2"
                fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"
              ></circle>
              <path
                d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="StoreRating16_svg__paint0_linear_32982_71565"
                  x1="8.00005"
                  y1="0.799988"
                  x2="8.00005"
                  y2="15.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#21973B"></stop>
                  <stop offset="1" stopColor="#128540"></stop>
                </linearGradient>
              </defs>
            </svg>
            {data.info.rating.value}
          </span>
        </div>

      </div>

      <div className="flex flex-col pt-2 pb-3 px-3 font-semibold text-[13px] leading-4.25 tracking-[-0.33px] text-[rgba(2,6,12,0.6)]">
        <div className="flex justify-between g-4 mt-1">
          <span>{data.info.cuisines?.join(" • ")}</span>
          <span>{data.info.costForTwo}</span>
        </div>
        <div className="flex justify-between g-4 mt-1">
          <span>{data.info.locationInfo.formattedAddress}</span>
          <span>{data.info.locationInfo.distanceString}</span>
        </div>
        <div className="flex gap-0.5 items-center rounded-xl bg-[#f0f0f5] py-0.5 px-2 mt-2.5 w-fit">
          <img
            className="sc-eeDRCY bReHcC"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/drink2.png"
            width="12px"
            height="12px"
            alt="Free Mocktail"
          ></img>
          <span>
            {data.info.vendorOffer.offerHighlights[0].logoCtx.text}
          </span>
        </div>
        <div className="flex justify-between gap-0.5 items-center rounded-lg bg-[rgb(27,166,114)] h-9 px-2 mt-3">
          
          <div className="flex gap-1 items-center">
            <img className="sc-eeDRCY dPVsUx" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" width="26px" height="20px" alt="offer_icon"></img>
          <span className="font-extrabold text-sm leading-5 text-white">
            {data.info.offerInfoV3?.vendorOffer?.title}{" "}
            {data.info.offerInfoV3?.vendorOffer?.subtitle}
          </span>
          </div>
          <span className="font-extrabold text-sm leading-5 text-white">{data.info.offerInfoV3?.vendorOffer?.subtext}</span>
        </div>
        <div className="flex items-center rounded-lg bg-[#c8f9e5] h-9 px-2 mt-3">
          <p className="font-bold text-sm leading-5 text-[rgb(27,166,114)]">
            {data.info.customerOffer.infos[0].description}
          </p>
        </div>
      </div>

    </a>
    </div>
  );
}
