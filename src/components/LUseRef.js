import React , {useEffect, useState, useRef}from "react"

export default function LUseRef(){
//if we want to find out how many time our component
//rerendered. we can not use useEffect beacause
//it will go into a infinite loop
//without dependecies. So we can use 
//useRef here


    const [data,setData] = useState("")
    const count = useRef(0)


    useEffect(()=>{
        count.current = count.current + 1
    })
    
   function handleChange(e){
           setData(()=>e.target.value)
   }
    return(
        <>
        <input 
        // onChange={(e)=>setData(e.target.value)}
        type="text"
        placeholder="Enter something"
        className="input"
        value={data}
        onChange={handleChange}
         />

         <div className="input">My name is {data.length}</div>
         <div>Component Rendered {count.current}</div>
        
        </>
    )
}