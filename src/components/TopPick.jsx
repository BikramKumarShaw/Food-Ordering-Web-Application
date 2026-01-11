import TopPickCard from "./TopPickCard"

export default function TopPick(data) {

    return(
        <>
            <div className="w-200 mx-auto p-4 flex flex-col gap-8">
                <div className="rounded-[1px] overflow-hidden">
                        
                    <h1 className="mb-4 text-2xl font-bold ">{data?.data?.title}</h1>
                
                    {data.length == 0 && <Shimmer />}
                    <div style={{ scrollbarWidth: "none" }} className="grid grid-rows-1 grid-flow-col auto-cols-max overflow-x-auto gap-3">
                        {data?.data?.carousel?.map((ele) => (<TopPickCard key={ele.bannerId} ele={ele}></TopPickCard>))}
                    </div>
                    
                </div>
                      
                <div className="h-4 bg-[rgba(2,6,12,0.05)]"></div>
            
            </div>        
                    
        
        </>
    )
}