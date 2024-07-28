"use client"
import React, { useEffect, useState } from 'react';
import './../../../style.css'

const Page = ({params}) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    let id = params.userid

    useEffect(() => {
        getUserDetails()
    },[])

    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        data = await data.json();
        setName(data.result.name);
    }
  return (
    <div className='add-user'>
            <h1>Update User Details</h1>
            <input type="text" value={name} className="input-field" onChange={(e) => setName(e.target.value)}  placeholder="Enter Name" />
            <input type="number" value={age} className="input-field" onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
            <input type="text" value={city} className="input-field" onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
            <button className='btn'>Update User</button>
        </div>
  )
}

export default Page