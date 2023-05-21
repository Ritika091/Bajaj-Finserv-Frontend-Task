import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import Home from '../Home/Home';

export default function Navbar() {
  const[dataEmp, setDataEmp]=useState([]);
  const[searched,setSearched]=useState("");
  const checkbox=useRef()
  const checkbox2=useRef()
  const checkbox3=useRef()
  const checkbox4=useRef()
  const checkbox5=useRef()
  const checkbox6=useRef()
  const checkbox7=useRef()
  const checkbox8=useRef()
  const[isChecked,setIsChecked]=useState(false)
 const skills=[{id:1, name:"Python"},{id:2,name:"HTML"},{id:3,name:"CSS"},{id:4,name:"SQL"},{id:5,name:"JavaScript"},{id:6,name:"Manual Testing"},{id:7,name:"Java"},{id:8,name:"Photoshop"}]
  let filtered=[]
 
  const fetchData=async()=>{
      const res=await fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json');
      const data=await res.json();
      setDataEmp(data.employees)
  }
  const searchData=(item)=>{
      let arr=[];   
      let data=item.filter(it=>it.name?.toLowerCase().includes(searched)||it.designation?.toLowerCase().includes(searched))
      return data;
  }


  const isCheck =(check,checkboxNum)=>{
      if(!isChecked){
          filtered.push(checkboxNum.current.textContent);
              }else{
                  filtered.pop(checkboxNum.current.textContent)
               } }
  useEffect(()=>{
      fetchData();
    },[])
 
  return (
    <>
    <div className="Nav">
        <h1>Employee Details Page</h1>
    <div className="Search">
    <div class="container-input">
    <input placeholder="Search" name="text" class="input" type="search" value={searched} onChange={(e)=>{setSearched(e.target.value);}}/>
    <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
<input type="checkbox" id="skill1" />
  <label for="skill1">JavaScript</label><br />

  <input type="checkbox" id="skill2" />
  <label for="skill2">Python</label><br />

  <input type="checkbox" id="skill3" />
  <label for="skill3">Java</label><br />
  
  <input type="checkbox" id="skill4" />
  <label for="skill4">HTML</label><br />

  <input type="checkbox" id="skill5" />
  <label for="skill5">CSS</label><br />

  <input type="checkbox" id="skill6" />
  <label for="skill6">Photoshop</label><br />

  <input type="checkbox" id="skill7" />
  <label for="skill7">Manual Testing</label><br />

  <input type="checkbox" id="skill8" />
  <label for="skill8">SQL</label><br />
  </div>

</div>
    
  </div>
  </div>
  </div>
   <Home searchData={searchData}/>
   </>
  )
 
}
