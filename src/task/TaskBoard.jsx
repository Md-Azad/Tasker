import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskBar from "./TaskBar";
import TaskList from "./TaskList";
import { AddTaskModal } from "./addTaskModal";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I wan to Learn React Such than I can treat it like my slave and make it do whatever I want to do",
    tags: ["web", "React", "Js"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit,setTaskToEdit] = useState(null)

  function handleAddTask(newTask,isAdd){
	if(isAdd){
		setTasks([...tasks, newTask])
	}else{
		setTasks(
			tasks.map(task=>{
				if(task.id ===newTask.id){
					return newTask
				}
				return task
		})
		)
	}
	
	setShowModal(false)
	
  }
  function handleEdit(task){
	setTaskToEdit(task)
	setShowModal(true)
  }

  function handleCloseClick(){
	setShowModal(false)
	setTaskToEdit(null)
  }

  function handleTaskDelete(taskId){
	const taskAfterDelete = tasks.filter( task=>task.id !==taskId)
	setTasks(taskAfterDelete)
  }

  return (
    <section className="mb-20" id="tasks">
		{showModal && <AddTaskModal onSave ={handleAddTask} taskToEdit={taskToEdit} onCloseClick={handleCloseClick} />}
      <div className="container">
        {/* <!-- Search Box --> */}
			<SearchBox />
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskBar onAddTask={()=>setShowModal(true)} />
          <TaskList  tasks = {tasks} onEdit ={handleEdit} onDelete={handleTaskDelete} />
        </div>
      </div>
    </section>
  );
}
