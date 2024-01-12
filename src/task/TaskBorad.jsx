import SearchBox from "./SearchBox";
import TaskBar from "./TaskBar";
import TaskList from "./TaskList";

export default function TaskBoard(){
    return (
        <section className="mb-20" id="tasks">
		
		<div className="container">
			{/* <!-- Search Box --> */}
		
        <SearchBox />
		{/* <!-- Search Box Ends --> */}
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				
                <TaskBar />
				<TaskList />
			</div>
		</div>
	</section>
    )
}