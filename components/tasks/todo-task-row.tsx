import { BadgeCheck, Circle, Hourglass, Trash2 } from "lucide-react";
import { deleteTask, toggleTask } from "@/actions/actions";
import type { Task } from "@/types/task";

type TodoTaskProps = {
  task: Task;
};

export default function TodoTaskRow({ task }: TodoTaskProps) {
  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center" key={task.id}>

      <form action={toggleTask} className="flex align-center mr-2">
      <input type="hidden" name="id" value={task.id} />
        <button
          type="submit"
          aria-label="Toggle task completition"
          className=""
        >
          {task.is_done ? (
            <BadgeCheck className="text-green-500 hover: rounded-xl cursor-pointer" />
          ) : (
            <Circle className="hover:bg-pink-500 rounded-xl cursor-pointer" />
          )}
        </button>
      </form>

      <span>
        {task.title}
      </span>

      <form action={deleteTask} className="">
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
