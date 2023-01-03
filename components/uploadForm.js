'use client'
import React, { useState } from 'react'
import {Addİmage} from "../firebase"

const uploadForm = () => {
    const [file,setFile]=useState([])
    const [error,setError]=useState()
    const typeList = ['image/png','image/jpeg']
    const handleClick=(e)=>{
let choose = (e.target.files[0])
if(choose && typeList.includes(choose.type)){
    setFile([...file,choose])
    console.log(choose.name);
    Addİmage(choose.name)
    
}
    }
  return (
    <div>
        <input type="file" onChange={handleClick}/>
    </div>
  )
}

export default uploadForm