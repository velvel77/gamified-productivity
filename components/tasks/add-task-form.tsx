import type { Task } from "@/types/task";
import { addTask } from "@/actions/actions";

type TodoTaskProps = {
  task: Task;
};


export default function AddTaskForm({ task }: TodoTaskProps) {
    return(
        <form action={addTask} className="space-x-2 h-4">
            <input 
            type="text" 
            name="title" 
            className="bg-white px-3 py-1 rounded" />
            <button type="submit" className="bg-background px-3 py-1 text-black rounded-lg">
              Add task
            </button>
        </form>
    )
}