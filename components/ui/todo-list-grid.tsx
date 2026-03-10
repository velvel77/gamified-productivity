import type { Task } from "@/types/task"
import TodoTaskRow from "@/components/tasks/todo-task-row";

type TodoTasksProps = {
    tasks: Task[];
}

export default function TodoGrid({ tasks }: TodoTasksProps) {
    return(
        //TODO: implement auto-columns
        <div className="grid w-full justify-items-center  border-red-500 border-4">
            <ul className="max-w-7/8 min-w-6/8 min-h-30 flex flex-col mt-6 p-3 space-y-2 bg-white border rounded-xl">
                
                {tasks.map((task) => (
                    <TodoTaskRow key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}