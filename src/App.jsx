
import { useState } from 'react';
import './App.css'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'
import Title from './components/Title/Title'


function App() {
  const [tasks, settask] = useState([
    'Prepare the kitchen',
    'Look for some cool stuff',
    'Code some ReactJS',
    'Drink a cup of coffee',
    'Going for the win',
  ]);


  return (
    <div className='app'>
   <Title/>
   <TaskList list={tasks} settask={settask} tasks={tasks}  />
   <AddTask tasks={tasks} settask={settask} />
    </div>
   
  )
}

export default App
