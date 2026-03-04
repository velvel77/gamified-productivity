import Header from "../components/header";
import MainBodyGrid from "../components/ui/main-body-grid";
import Link from "next/link";
import prisma from "@/lib/db";
import { addTask } from "@/actions/actions";



export default async function Home() {

  const tasks = await prisma.task.findMany();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="">
        <MainBodyGrid>
          <span className="">Tired of being underleveled?</span>

          <h1 className="">Level up now!</h1>

          {/* <p>Test: {JSON.stringify(tasks)}</p> */}

          <form action={addTask} className="space-x-2 h-4">
            <input 
            type="text" 
            name="title" 
            className="px-3 py-1 rounded" />
            <button type="submit" className="bg-(--background) px-3 py-1 text-black rounded-lg">
              Add task
            </button>
          </form>

        </MainBodyGrid>
      </main>

    </>
  );
}
