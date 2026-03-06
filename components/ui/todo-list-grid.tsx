import type { Task } from "@/types/task"
import TodoTaskRow from "@/components/tasks/todo-task-row";

type TodoTasksProps = {
    tasks: Task[];
}

export default function TodoGrid({ tasks }: TodoTasksProps) {
    return(
        <div>
            <ul className="mt-6">
                {tasks.map((task) => (
                    <TodoTaskRow key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}