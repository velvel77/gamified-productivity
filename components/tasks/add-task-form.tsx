import { addTask } from "@/actions/actions";


export default function AddTaskForm() {
    return(
        <form action={addTask} className="space-x-2 h-4">
            <label htmlFor="title" className="sr-only">
                Add task
            </label>
            <input 
            id="title"
            type="text" 
            name="title" 
            placeholder="New title"
            className="bg-white px-3 py-1 rounded" />
            <button 
            className="bg-background px-3 py-1 text-black rounded-lg"
            type="submit">
              Add task
            </button>
        </form>
    )
}