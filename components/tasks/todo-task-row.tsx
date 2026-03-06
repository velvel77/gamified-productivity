import { Task } from "@/types/task";
import { deleteTask } from "@/actions/actions";
import { Trash2 } from "lucide-react";

type TodoTaskRowProps = {
  task: Task;
};

export default function TodoTaskRow({ task }: TodoTaskRowProps) {
  <li className="flex justify-between items-center gap-5" key={task.id}>
    <span>{task.title}</span>
    <form action={deleteTask}>
      <input type="hidden" name="id" value={task.id} />
      <button
        className="hover:bg-pink-700 rounded-xl cursor-pointer p-1.5"
        type="submit"
      >
        <Trash2 />
      </button>
    </form>
  </li>;
}
