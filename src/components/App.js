import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks]=useState(TASKS)
  // const [btnClass, setBtnClass]= useState(false);
  
  const [category, handleCategory]= useState('All')

  function handleDelete(name){
    let newData = tasks.filter(item =>item.text!==name);
    setTasks(newData)
  }

  const filtTasks=tasks.filter(task=>{
      if(category==="All"){
        return task
      }else{
        return task.category===category
      }
    })
    function handleSubmit(data){
      setTasks([...tasks, data])
    }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories ={CATEGORIES} handleCategory={handleCategory}/>
      <NewTaskForm categories ={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={filtTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
