import React,{ useState, useEffect } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import addTask from '../pages/index'

// Destructuring taskText and onClick
const Task = ({taskText, onClick}) => {
   console.log(taskText)

  return (
    <div className='flex items-center text-white'>
      <div className=' bg-[#031956] text-[#f5fffa] flex w-[70%] rounded-[15px] mb-[10px] flex-1'>
        <div className='flex items-center justify-between w-full p-[20px] 
        text-xl'>
           {taskText} 
        </div>
      </div>
      <BsFillTrashFill
         onClick={onClick}
        className='text-2xl cursor-pointer ml-10'
      />
    </div>
  )
  
}

export default Task
