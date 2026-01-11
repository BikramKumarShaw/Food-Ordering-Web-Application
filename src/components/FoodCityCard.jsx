export default function FoodCityCard({data}) {

    return (
        <a className="p-4 border border-[rgba(2,6,12,0.15)] rounded-xl flex items-center text-[14px] justify-center text-center"  
            href={data.link}>
            {data.text}
        </a>
    )
}