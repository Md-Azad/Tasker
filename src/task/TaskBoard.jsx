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

  function handleAddTask(newTask){
	console.log("adding a task...",newTask)
	setTasks([...tasks, newTask])
	setShowModal(false)
	
  }

  return (
    <section className="mb-20" id="tasks">
		{showModal && <AddTaskModal onSave ={handleAddTask} />}
      <div className="container">
        {/* <!-- Search Box --> */}
			<SearchBox />
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskBar onAddTask={()=>setShowModal(true)} />
          <TaskList  tasks = {tasks} />
        </div>
      </div>
    </section>
  );
}
