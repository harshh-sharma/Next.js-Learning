"use client";

import { useState } from "react";
const Home = () => {
  const handleClick = async() => {
    const data = {name:"Honey",role:"coder"}
    const response = await fetch("api/add",{method:"POST",headers:{
      "content-Type":"application/json"
    },
    body:JSON.stringify(data)
  })
  console.log(await response.json());
  }
  const [count,setCount] = useState(0);
  return (
    <>
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default Home;