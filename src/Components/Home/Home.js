import React, { useEffect, useState } from 'react'
import './Home.css'
export default function Home() {
    const [show,setShow]=useState([]);
    const fetchData=async()=>{
        const res=await fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json');
        const data=await res.json();
        console.log(data);
        setShow(data.employees)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    
    <div className='Home'>
        <div className="allemp">

{show.map((data)=>(
            <div className="card">
                <h1>{data.name}</h1>
                <div className="cardsec">
                    <p>ID-{data.id}</p>
                    <p>{data.designation}</p>
                </div>
                <p>{data.skills}</p>
              <button className='details'>Show Details</button>
            </div>
))}
        </div>
    </div>
  )
}
