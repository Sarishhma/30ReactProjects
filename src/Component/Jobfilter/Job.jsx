import React, { useState } from 'react'
import JobData from "./JobData";


export default function Job() {
    const [search,setSearch]=useState("");
    const [location ,setlocation]=useState("all");
    const [experience,setExperience]=useState("all")
    const [type,setType]=useState("all")
    const filteredJobs =  JobData.filter((jobs)=>{
        const query = search.toLowerCase();
            
     const matchesType =
     type === "all" || jobs.type === type;

        const matchesSearch = jobs.title.toLowerCase().includes(query)||
        jobs.company.toLowerCase().includes(query)
        
        const matchesLocation =
        location==="all" || jobs.location === location;

        const matchExperience =
        experience ==="all"|| jobs.experience === experience;

        return (matchesSearch && matchesLocation && matchExperience && matchesType);


            
    })

  return (
    <div>
        <h1>Job earch</h1>
        <input type="text" placeholder='search job or company...' value={search} onChange={(e)=>setSearch(e.target.value)}  />
        <select value={location} onChange={(e)=>setlocation(e.target.value)}>
            <option value="all">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="Berlin">Berlin</option>
        </select>
        <select value={experience} onChange={(e)=>setExperience(e.target.value)}>
            <option value="all">All Levels</option>
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
        </select>
             {filteredJobs.map((job) => (
         <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.type}</p>
          <p>{job.experience}</p>
        </div>
      ))}
    </div>
  )
}
