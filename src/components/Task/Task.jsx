import React, { useState } from 'react'
import './Task.css'


const Task = ({ index, text , tasks, settask }) => {
  const [isModifiying, setIsModifiying] = useState(false);
  const [editValue, setEditvalue] = useState(text)

  const handleEditInput = (event) => {
    setEditvalue(event.target.value)
  }
  const handlesave = () => {
    let copyOfTasks = [...tasks]
    copyOfTasks[index] = editValue
    settask(copyOfTasks)
    setIsModifiying(false)
  }

  const handeleDelet = (text) =>{
    let copyOfTasks = [...tasks]
    copyOfTasks = copyOfTasks.filter((task) =>task != text)
    settask(copyOfTasks)
  };

  return (
    <div className='task'>
      {isModifiying == true ? <>
      <input type="text" value={editValue} onChange={handleEditInput} />
      <div style={{ display: 'flex', gap: '10px' }}>
      <button className='save' onClick={() => handlesave()}>save</button>
      <button onClick={() => setIsModifiying(false)} className='cancel'>cancel</button>
      </div>
      </> : <>
        <p>{text}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="edit" onClick={() => setIsModifiying(true)}>edit</button>
          <button className="delete" onClick={() => handeleDelet(text)}>delete</button>
        </div>
      </> 
      }
      
    </div>
  );
};

export default Task