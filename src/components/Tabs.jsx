export default function Tabs({title}) {

    return(
        <div className="flex flex-col gap-2"> 
            <p className="mx-2 text-[18px] font-bold">{title}</p>
            <div className="h-1 w-full bg-[rgb(255,82,0)] rounded-t-lg"></div>
        </div>
    )
}