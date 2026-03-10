import { Trash2 } from "lucide-react";
import { deleteTask } from "@/actions/actions";
import type { Task } from "@/types/task";

type TodoTaskProps = {
  task: Task;
};

export default function TodoTaskRow({ task }: TodoTaskProps) {
  return (
    <li className="grid grid-cols-[1fr_auto] items-start" key={task.id}>
      <span className="text-pink-600 font-semibold min-w-0 mt-1 wrap-break-word">
        {task.title}
      </span>
      <form action={deleteTask}>
        <input type="hidden" name="id" value={task.id} />
        <button
          className="hover:bg-pink-500 rounded-xl cursor-pointer p-1.5"
          type="submit"
          aria-label="Delete task"
        >
          <Trash2 className="text-pink-500" />
        </button>
      </form>
    </li>
  );
}
