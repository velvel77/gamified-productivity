import Header from "../components/header";
import MainBodyGrid from "../components/ui/main-body-grid";
import prisma from "@/lib/db";
import AddTaskForm from "@/components/tasks/add-task-form";
import TodoGrid from "@/components/ui/todo-list-grid";



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

          <AddTaskForm />
          
          <TodoGrid tasks={tasks} />

        </MainBodyGrid>
      </main>

    </>
  );
}
