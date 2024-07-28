"use client"
import React, { useState } from 'react' 
import './../style.css'
const Page = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")

    const addUser = async() => {
        let respone = await fetch('http://localhost:3000/api/users',{
            method:'Post',
            body:JSON.stringify({name,age,city})
        });
        respone = await respone.json();
        if(respone.success){
            alert("new User added");
        }else{
            alert("some error with data please check anf try again");
        }
        console.log(respone);
    }
    return (
        <div className='add-user'>
            <h1>Add New User</h1>
            <input type="text" value={name} className="input-field" onChange={(e) => setName(e.target.value)}  placeholder="Enter Name" />
            <input type="number" value={age} className="input-field" onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
            <input type="text" value={city} className="input-field" onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
            <button onClick={addUser} className='btn'>Add User</button>
        </div>
    )
}

export default Page