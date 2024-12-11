import React from 'react'
import './TaskList.css'
import Task from '../Task/Task'


const TaskList = ({list ,tasks, settask}) => {
  return (
    <div className='tasklist'>{ list.map((task ,index) => <Task key={index} index={index} text={task} tasks={tasks} settask={settask} />)} </div>
  )
}

export default TaskList