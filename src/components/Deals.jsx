import Dealscard from './Dealscard'

export default function Deals({data}) {
    
    return(
        <>
            <div className="w-200 mx-auto p-4">
                <p className='text-[1.5em] font-bold my-4'>Deals for you</p>

                <div style={{scrollbarWidth: "none"}} className='grid grid-rows-1 grid-flow-col auto-cols-max overflow-x-auto gap-4'>
                    {data.map((item) => <Dealscard key={item.info?.offerIds[0]} data={item.info} />)}
                </div>
                
            </div>
        </>
    )
}