const JobCard = () =>{

const jobData = [

{
    title: "Naib Tehsildar at Delhi Development Authority",
    location: "Lucknow",
    desc:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    date:"3 days ago",
    position:"Naib Tehsildar",

},
{
    title: "Naib Tehsildar at Delhi Development Authority",
    location: "Lucknow",
    desc:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    date:"3 days ago",
    position:"Naib Tehsildar",

}

]

    return(



        
        <div> 
 {jobData.map((item) => (


<a href="#" className="flex m-4 flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl ">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/pnglogo.webp" alt=""/>
    
    <div className="flex flex-col justify-between p-4 leading-normal">
    <div className="py-2"> 

<span className="inline-flex items-center rounded-full bg-red-100 px-3  py-0.5 text-sm font-medium text-red-800">
{item.position}
</span>
</div>
        <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        <p className="text-indigo-600 space-y-1 text-lg font-medium leading-6">{item.location}</p>
        <p className=" font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
        <p className="py-4 font-normal text-gray-500">{item.date}</p>
       
     

    </div>
</a>

))}
</div>

    )
}


export default JobCard;