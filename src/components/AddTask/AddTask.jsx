import React, { useState } from 'react'
import './AddTask.css'

const AddTask = ({tasks, settask}) => {
  const [newtask, setnewtask] = useState('')
  const handlenewTaskChange = (event) =>{
    setnewtask(event.target.value)
  };
  const handlesubmit = (event) =>{
    event.preventDefault();
    if (newtask != ''){
    settask([...tasks,newtask])
    setnewtask ('')
  }
  else {
    alert('pleas enter a task')
  }
  }
   
   

  return (
    <div className='addtask'>
      <input type="text" placeholder='Enter a nw task...' value={newtask} onChange={handlenewTaskChange}   />
      <button onClick={handlesubmit}>add task</button>
    </div>
  )
}

export default AddTask