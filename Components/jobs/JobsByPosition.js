const JobsByPosition =  () =>{



    const jobsPosition = [
        {key: "1",
    position:"Sales"
    },
    {key: "2",
    position:"Sales"
    },
    {key: "3",
    position:"Sales"
    },
    {key: "4",
    position:"Sales"
    }
    ]

    return(
        
       
     
<div className=" bg-zinc-100 py-4 mt-8">
          <h2 className="text-lg mb-4 font-bold text-gray-900 lg:text-lg">
            Jobs by Position
          </h2>
    {jobsPosition.map((item) => {

        return(
<span className="inline-flex items-center rounded-full m-2 	border-solid border-2 border-sky-500 px-6 py-2 text-sm font-medium text-sky-500">
        {item.position}
      </span>
        )
    })}   
</div>



    )
}


export default JobsByPosition;