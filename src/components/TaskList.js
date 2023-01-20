import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
  return (
    <div className="tasks">
      {tasks.map((task, ind)=>
      <Task
      key={ind}
      category={task.category}
      text={task.text}
      onDelete={onDelete}/>)}
    </div>
  );
}

export default TaskList;
