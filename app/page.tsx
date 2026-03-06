import Header from "../components/header";
import MainBodyGrid from "../components/ui/main-body-grid";
import Link from "next/link";
import prisma from "@/lib/db";
import { addTask, deleteTask } from "@/actions/actions";
import { Trash2 } from "lucide-react";



export default async function Home() {

  const tasks = await prisma.task.findMany();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex justify-center">
        <MainBodyGrid>
          <span className="">Tired of being underleveled?</span>

          <h1 className="">Level up now!</h1>

          {/* <p>Test: {JSON.stringify(tasks)}</p> */}

          <form action={addTask} className="space-x-2 h-4">
            <input 
            type="text" 
            name="title" 
            className="bg-white px-3 py-1 rounded" />
            <button type="submit" className="bg-background px-3 py-1 text-black rounded-lg">
              Add task
            </button>
          </form>

          <ul className="mt-6">
            {tasks.map((task) => 
              <li key={task.id}>
                {task.title}
                <form action={deleteTask}>
                <input 
                type="hidden"
                name="id"
                value={task.id}
                />
                <button type="submit">
                  <Trash2 />
                </button> 
                </form>
              </li>
            )}
          </ul>

        </MainBodyGrid>
      </main>

    </>
  );
}
