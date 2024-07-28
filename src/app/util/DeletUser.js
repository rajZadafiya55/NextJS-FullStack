"use client";
import React from 'react'

const DeletUser = ({id}) => {
    const userId = id;
    console.log(userId)

    const deleteUser = async() => {
        let result = await fetch(`http://localhost:3000/api/users/${id}`,{
            method:"delete"
        });
        result =await result.json();
        if(result.success){
            alert('User is Deleted..!')
        }
    }
  return (
    <div>
        <span><button onClick={deleteUser}>Delete</button></span>
    </div>
  )
}

export default DeletUser